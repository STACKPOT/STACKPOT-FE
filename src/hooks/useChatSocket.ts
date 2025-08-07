

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
  const accessToken = localStorage.getItem('accessToken');
  const { mutate } = usePatchChatRoomJoin();

  useEffect(() => {
    if (!chatRoomId || !accessToken) return;
    mutate(chatRoomId);


    const client = Stomp.over(() => new SockJS(SOCKET_URL));
    client.reconnectDelay = 5000;

    client.connectHeaders = {
      Authorization: accessToken,
      ChatRoomId: chatRoomId.toString(),
    };

    client.onConnect = () => {
      client.subscribe(`/sub/chat/${chatRoomId}`, (msg) => {
        const parsed = JSON.parse(msg.body) as ChatMessages;
        onReceive(parsed);
      });
      setConnected(true);
    };

    client.onStompError = (frame) => {
      console.error("STOMP error:", frame);
      setConnected(false);
    };
    client.onWebSocketClose = (event) => {
      console.error("WebSocket closed", event);
    };

    client.onWebSocketError = (event) => {
      console.error("WebSocket error", event);
    };
    client.activate();

    clientRef.current = client;

    return () => {
      client.disconnect(() => setConnected(false));
    };
  }, [chatRoomId, accessToken]);

  const sendMessage = (message: string, fileUrl?: string) => {
    if (clientRef.current && connected) {
      clientRef.current.send(`/pub/chat/${chatRoomId}`, {}, JSON.stringify({ message, fileUrl }));
    }
  };

  return {
    sendMessage,
    connected,
  };
};