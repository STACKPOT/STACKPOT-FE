import { useState, useEffect, useRef } from "react";
import {
  pageWrapperStyle,
  chatWrapperStyle,
  sidebarStyle,
  chatRoomTitleStyle,
  chatRoomListStyle,
  chatRoomItemStyle,
  chatRoomNameTimeWrapperStyle,
  chatRoomNameStyle,
  chatRoomDescStyle,
  chatMainStyle,
  chatTopBarStyle,
  chatRoomHeaderStyle,
  chatPlaceholderStyle,
  inputContainerStyle,
  textAreaStyle,
  sendButtonStyle,
  messageListStyle,
  messageBubbleStyle,
  chatRoomInfoStyle,
  emptyMessageStyle,
  chatRoomTimeStyle,
  messageWrapperStyle,
  profileImageStyle,
  nicknameTextStyle,
  messageLineWrapperStyle,
  timeTextStyle,
  unreadBadgeStyle,
  selectedRoomStyle,
  chatRoomContentStyle,
  chatRoomIconTextWrapperStyle,
  chatRoomTextStyle,
  dateDividerStyle,
  chatRoomIconImgStyle,
} from "./Chat.style";
import { DefaultChatIcon, ImageIcon, SelectChatIcon, WorkGroupIcon } from '@assets/svgs';
import { roleImages } from '@constants/roleImage';
import useGetChatRooms from "apis/hooks/chats/useGetChatRooms";
import useGetChatMessages from "apis/hooks/chats/useGetChatMessages";
import { ChatMessages, ChatRoom } from "apis/types/chat";
import { formatCreatedAt, formatTime } from "@utils/dateUtils";
import { format, parseISO } from "date-fns";
import usePatchChatRoomThumbnails from "apis/hooks/chats/usePatchChatRoomThumbnails";



const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const { data } = useGetChatRooms();
  const { mutate: patchChatRoomThumbnails } = usePatchChatRoomThumbnails();
  const chatRooms = (data?.result ?? []) as ChatRoom[];

  const messageListRef = useRef<HTMLDivElement | null>(null);
  const topSentinelRef = useRef<HTMLDivElement | null>(null);

  const {
    data: messagesData,
    fetchPreviousPage,
    hasPreviousPage,
    refetch,
  } = useGetChatMessages({
    chatRoomId: selectedRoomId ?? 0,
    cursor: null,
    size: 20,
    direction: null,
  });

  const selectedRoom = chatRooms.find((room: ChatRoom) => room.chatRoomId === selectedRoomId);

  const handleRoomClick = (room: ChatRoom) => {
    const nextRoomId = selectedRoomId === room.chatRoomId ? null : room.chatRoomId;
    setSelectedRoomId(nextRoomId);

    if (nextRoomId !== null) {
      refetch(); // Trigger refetch of chat messages
    }
  }

  const handleCoverClick = () => {
    if (!selectedRoomId) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file && selectedRoomId !== null) {
        patchChatRoomThumbnails({ chatRoomId: selectedRoomId, file })
      }
    };
    input.click();
  };

  useEffect(() => {
    if (messageListRef.current && messagesData?.pages) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messagesData, selectedRoomId]);

  useEffect(() => {
    if (!topSentinelRef.current || !hasPreviousPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchPreviousPage();
        }
      },
      {
        root: messageListRef.current,
        threshold: 0,
      }
    );

    observer.observe(topSentinelRef.current);

    return () => {
      if (topSentinelRef.current) observer.unobserve(topSentinelRef.current);
    };
  }, [fetchPreviousPage, hasPreviousPage]);

  return (
    <div css={pageWrapperStyle}>
      <div css={chatWrapperStyle}>
        <div css={sidebarStyle}>
          <div css={chatRoomTitleStyle}>팟 채팅방</div>
          <div css={chatRoomListStyle}>
            {chatRooms.map((room: ChatRoom) => (
              <div
                key={room.chatRoomId}
                css={chatRoomItemStyle(selectedRoomId === room.chatRoomId)}
                onClick={() => handleRoomClick(room)}
              >
                <div css={chatRoomContentStyle}>
                  <div css={chatRoomIconTextWrapperStyle}>
                    {room.thumbnailUrl ? <img css={chatRoomIconImgStyle}
                      src={room.thumbnailUrl}
                      alt={`채팅방 ${room.chatRoomName} 썸네일`}
                    /> : <DefaultChatIcon css={chatRoomIconImgStyle} />}
                    <div css={chatRoomInfoStyle}>
                      <div css={chatRoomNameTimeWrapperStyle}>
                        <span css={chatRoomNameStyle}>{room.chatRoomName}</span>
                        <span css={chatRoomTimeStyle}>{formatTime(room.lastChatTime)}</span>
                      </div>
                      <div css={chatRoomDescStyle}>{room.lastChat}</div>
                    </div>
                  </div>
                  {room.unReadMessageCount !== 0 &&
                    <div css={unreadBadgeStyle}>
                      {room.unReadMessageCount}
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <div css={chatMainStyle}>
          <div css={chatTopBarStyle}>
            <div css={selectedRoomStyle}>
              <WorkGroupIcon />
              <div css={chatRoomHeaderStyle}>{selectedRoom ? selectedRoom.chatRoomName : "채팅할 팟을 선택해 주세요."}</div>
              <div css={chatRoomTextStyle} onClick={handleCoverClick}><ImageIcon />커버 추가</div>
            </div>
          </div>

          {selectedRoom ? (
            <div css={messageListStyle} ref={messageListRef}>
              <div ref={topSentinelRef} />
              {groupMessagesByDate(messagesData?.pages.flatMap((page) => page.result?.chats ?? []) ?? []).map(
                ([date, chats]) => (
                  <div key={date}>
                    <div css={dateDividerStyle}>
                      {format(new Date(date), "yyyy년 M월 d일")}
                    </div>
                    {chats.map((chat) => (
                      <MessageBubble key={chat.chatId} message={chat} isMine={chat.userName === "나"} />
                    ))}
                  </div>
                )
              )}
            </div>
          ) : (
            <div css={chatPlaceholderStyle}>
              <SelectChatIcon />
              <div css={emptyMessageStyle}>채팅할 팟을 선택해 주세요.</div>
            </div>
          )}

          <div css={inputContainerStyle}>
            <textarea css={textAreaStyle} placeholder="메시지를 입력해 보세요." />
            <button css={sendButtonStyle}>전송</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

const groupMessagesByDate = (messages: ChatMessages[]) => {
  const groups: { [date: string]: ChatMessages[] } = {};

  messages.forEach((message) => {
    const dateKey = format(parseISO(message.createdAt), "yyyy-MM-dd");
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(message);
  });

  return Object.entries(groups).sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());
};

const MessageBubble = ({
  message,
  isMine,
}: {
  message: ChatMessages;
  isMine: boolean;
}) => {


  return (
    <div css={messageWrapperStyle(isMine)}>
      {!isMine && (
        <img src={roleImages[message.role]} alt="profile" css={profileImageStyle} />
      )}
      <div>
        {!isMine && (
          <div css={nicknameTextStyle}>{message.userName}</div>
        )}
        <div css={messageLineWrapperStyle(isMine)}>
          <div css={messageBubbleStyle(isMine)}>{message.message}</div>
          <div css={timeTextStyle}>{formatCreatedAt(message.createdAt)}</div>
        </div>
      </div>
    </div>
  );
};
