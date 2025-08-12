import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { ChatMessages } from "apis/types/chat";
import usePatchChatRoomJoin from "apis/hooks/chats/usePatchChatRoomJoin";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "https://api.stackpot.co.kr/ws-connect";



export const useChatSocket = (
  chatRoomId: number | null,
  onReceive: (msg: ChatMessages) => void
) => {
  const clientRef = useRef<any>(null);
  const [connected, setConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'open' | 'closed' | 'error'>('closed');
  const accessToken = localStorage.getItem('accessToken');
  const { mutate } = usePatchChatRoomJoin();

  useEffect(() => {
    if (!chatRoomId || !accessToken) return;
    mutate(chatRoomId);

    const client = Stomp.over(() => new SockJS(SOCKET_URL));
    client.reconnectDelay = 1000;

    client.connectHeaders = {
      Authorization: accessToken,
      ChatRoomId: chatRoomId.toString(),
    };

    client.onConnect = () => {
      client.subscribe(`/sub/chat/${chatRoomId}`, (msg) => {
        try {
          const parsed = JSON.parse(msg.body) as ChatMessages;
          onReceive(parsed);
        } catch (e) {
          console.error(e, msg.body);
        }
      });
      setConnected(true);
      setConnectionStatus('open');
    };

    client.onStompError = (frame) => {
      console.error("STOMP error:", frame);
      setConnected(false);
      setConnectionStatus('error');
    };
    client.onWebSocketClose = (event) => {
      console.error("WebSocket closed", event);
      setConnected(false);
      setConnectionStatus('closed');
    };

    client.onWebSocketError = (event) => {
      console.error("WebSocket error", event);
      setConnected(false);
      setConnectionStatus('error');
    };

    setConnectionStatus('connecting');
    client.activate();

    clientRef.current = client;

    return () => {
      if (client.active) {
        client.deactivate()
          .then(() => {
            setConnected(false);
            setConnectionStatus('closed');
          })
          .catch(() => {
            setConnected(false);
            setConnectionStatus('closed');
          });
      } else {
        setConnected(false);
        setConnectionStatus('closed');
      }
      clientRef.current = null;
    };
  }, [chatRoomId, accessToken]);

  const sendMessage = (message: string, fileUrl?: string) => {
    if (!clientRef.current || !connected || !chatRoomId) return false;
    clientRef.current.publish({
      destination: `/pub/chat/${chatRoomId}`,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ message, fileUrl }),
    });
    return true;
  };

  return {
    sendMessage,
    connected,
    connectionStatus,
  };
};