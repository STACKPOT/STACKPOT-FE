/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";
import {
  pageWrapperStyle,
  chatWrapperStyle,
  sidebarStyle,
  chatRoomTitleStyle,
  chatRoomListStyle,
  chatRoomItemStyle,
  chatRoomIconStyle,
  chatRoomNameStyle,
  chatRoomDescStyle,
  chatMainStyle,
  chatTopBarStyle,
  chatRoomHeaderStyle,
  chatPlaceholderStyle,
  placeholderIconStyle,
  inputContainerStyle,
  textAreaStyle,
  sendButtonStyle,
  messageListStyle,
  messageBubbleStyle,
  chatRoomInfoStyle,
  emptyMessageStyle,
  chatRoomTimeStyle,
} from "./Chat.style";
import { MyPotFilledIcon, SelectChat } from '@assets/svgs';

type Message = {
  id: number;
  user: string;
  text: string;
};

const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  const chatRooms = [
    { id: 1, name: "스택팟 사이드 프로젝트 A", desc: "첫 대화를 시작해 보세요!", time: "오후 7:35" },
    { id: 2, name: "스택팟 사이드 프로젝트 B", desc: "팀 회의가 곧 시작돼요.", time: "오후 7:35" },
    { id: 3, name: "스택팟 사이드 프로젝트 C", desc: "마감일이 다가오고 있어요!", time: "오후 7:35" },
  ];

  const messages = [
    { id: 1, user: "me", text: "안녕하세요!" },
    { id: 2, user: "other", text: "안녕하세요. 반갑습니다." },
    { id: 3, user: "me", text: "오늘 일정 확인하셨나요?" },
  ];

  const selectedRoom = chatRooms.find((room) => room.id === selectedRoomId);

  return (
    <div css={pageWrapperStyle}>
      <div css={chatWrapperStyle}>
        <div css={sidebarStyle}>
          <div css={chatRoomTitleStyle}>팟 채팅방</div>
          <div css={chatRoomListStyle}>
            {chatRooms.map((room) => (
              <div
                key={room.id}
                css={[
                  chatRoomItemStyle,
                  selectedRoomId === room.id && css`
                    background-color: #eef6ff;
                  `
                ]}
                onClick={() =>
                  setSelectedRoomId((prev) => (prev === room.id ? null : room.id))
                }
              >
                <MyPotFilledIcon />
                <div css={chatRoomInfoStyle}>
                  <div css={chatRoomNameStyle}>{room.name} <span css={chatRoomTimeStyle}>{room.time}</span></div>
                  <div css={chatRoomDescStyle}>{room.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div css={chatMainStyle}>
          <div css={chatTopBarStyle}>
            <div css={chatRoomHeaderStyle}>{selectedRoom ? selectedRoom.name : "채팅할 팟을 선택해 주세요."}</div>
          </div>

          {selectedRoom ? (
            <div css={messageListStyle}>
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} isMine={msg.user === "me"} />
              ))}
            </div>
          ) : (
            <div css={chatPlaceholderStyle}>
              <SelectChat />
              <div css={emptyMessageStyle}></div>채팅할 팟을 선택해 주세요.
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

const MessageBubble = ({ message, isMine }: { message: Message; isMine: boolean }) => {
  return <div css={messageBubbleStyle(isMine)}>{message.text}</div>;
};