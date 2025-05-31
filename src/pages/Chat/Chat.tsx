import { useState } from "react";
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
} from "./Chat.style";
import { ImageIcon, MyPotFilledIcon, SelectChatIcon, WorkGroupIcon } from '@assets/svgs';
import { roleImages } from '@constants/roleImage';
import { Role } from 'types/role';
import useGetChatRooms from "apis/hooks/chats/useGetChatRooms";
import { ChatRoom } from "apis/types/chat";

// const chatRooms = [
//   {
//     chatRoomId: 1,
//     chatRoomName: "스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A스택팟 사이드 프로젝트 A",
//     thumbnailUrl: "https://via.placeholder.com/32",
//     lastChatTime: "2025-05-31T19:35:00",
//     lastChat: "첫 대화를 시작해 보세요!",
//     unReadMessageCount: 4,
//   },
//   {
//     chatRoomId: 2,
//     chatRoomName: "스택팟 사이드 프로젝트 B",
//     thumbnailUrl: "https://via.placeholder.com/32",
//     lastChatTime: "2025-05-31T19:35:00",
//     lastChat: "팀 회의가 곧 시작돼요.",
//     unReadMessageCount: 0,
//   },
//   {
//     chatRoomId: 3,
//     chatRoomName: "스택팟 사이드 프로젝트 C",
//     thumbnailUrl: "https://via.placeholder.com/32",
//     lastChatTime: "2025-05-31T19:35:00",
//     lastChat: "마감일이 다가오고 있어요!",
//     unReadMessageCount: 0,
//   },
// ];

const messages = [
  {
    chatId: "1",
    userName: "나",
    message: "여러분! 오늘 디코 회의 있는 거 아시죠? 안되시는 분 있나용?",
    fileUrl: "",
    createdAt: "2025-05-31T13:28:00",
  },
  {
    chatId: "2",
    userName: "너무 착한 알파",
    message: "아 기대돼 신난다",
    fileUrl: "",
    createdAt: "2025-05-31T13:29:00",
  },
  {
    chatId: "3",
    userName: "너무 착한 알파",
    message: "회의 끝나고 뭐 먹지?",
    fileUrl: "",
    createdAt: "2025-05-31T13:30:00",
  },
  {
    chatId: "4",
    userName: "나",
    message: "인정 재밌겠다",
    fileUrl: "",
    createdAt: "2025-05-31T13:31:00",
  },
  {
    chatId: "5",
    userName: "너무 착한 알파",
    message: "오늘 회사 회식이라.. ㅠㅠ 업무 카드로 진행상황 브리핑 해도 괜찮을까요?",
    fileUrl: "",
    createdAt: "2025-05-31T13:32:00",
  },
  {
    chatId: "6",
    userName: "나",
    message: "넵 올리시고 나서 말씀 해주세요!",
    fileUrl: "",
    createdAt: "2025-05-31T13:33:00",
  },
  {
    chatId: "7",
    userName: "너무 착한 알파",
    message: "감사합니당! 🙇‍♀️",
    fileUrl: "",
    createdAt: "2025-05-31T13:34:00",
  },
  {
    chatId: "8",
    userName: "나",
    message: "그럼 일단 오늘 안건은... 진행 방식부터 정리하죠!",
    fileUrl: "",
    createdAt: "2025-05-31T13:35:00",
  },
  {
    chatId: "9",
    userName: "너무 착한 알파",
    message: "넵 제가 적어둘게요~",
    fileUrl: "",
    createdAt: "2025-05-31T13:36:00",
  },
  {
    chatId: "10",
    userName: "나",
    message: "화면 구성은 알파님 맡아주시고, 나는 상태 관리 쪽 볼게요.",
    fileUrl: "",
    createdAt: "2025-05-31T13:37:00",
  },
  {
    chatId: "11",
    userName: "너무 착한 알파",
    message: "오키! 구조는 어제 정리한 대로 가면 될 듯!",
    fileUrl: "",
    createdAt: "2025-05-31T13:38:00",
  },
  {
    chatId: "12",
    userName: "나",
    message: "넵! 그럼 진행해볼게요~",
    fileUrl: "",
    createdAt: "2025-05-31T13:39:00",
  }
];

// Function to format lastChatTime conditionally
const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일`;
};

const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const { data } = useGetChatRooms();
  const chatRooms = (data?.result ?? []) as ChatRoom[];
  console.log("Chat Rooms:", chatRooms);
  const selectedRoom = chatRooms.find((room: ChatRoom) => room.chatRoomId === selectedRoomId);

  const handleCoverClick = () => {
    alert("커버 추가 기능은 아직 구현되지 않았습니다.");
  };

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
                onClick={() =>
                  setSelectedRoomId((prev) => (prev === room.chatRoomId ? null : room.chatRoomId))
                }
              >
                <div css={chatRoomContentStyle}>
                  <div css={chatRoomIconTextWrapperStyle}>
                    <MyPotFilledIcon />
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
            <div css={messageListStyle}>
              {messages.map((msg) => (
                <MessageBubble key={msg.chatId} message={msg} isMine={msg.userName === "나"} />
              ))}
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

const MessageBubble = ({
  message,
  isMine,
}: {
  message: {
    chatId: string;
    userName: string;
    message: string;
    fileUrl: string;
    createdAt: string;
  };
  isMine: boolean;
}) => {
  // Format createdAt to "오후 1:28" format
  const formatCreatedAt = (isoString: string) => {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div css={messageWrapperStyle(isMine)}>
      {!isMine && (
        <img src={roleImages.BACKEND} alt="profile" css={profileImageStyle} />
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