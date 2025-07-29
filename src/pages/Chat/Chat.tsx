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
  modalProfileStyle,
  modalProfileImageStyle,
  modalNicknameTextStyle,
  fileUploadContainer,
  fileUploadText,
  fileUploadButton,
} from "./Chat.style";
import { DefaultChatIcon, ImageIcon, SelectChatIcon, WavingHandIcon } from '@assets/svgs';
import { roleImages } from '@constants/roleImage';
import useGetChatRooms from "apis/hooks/chats/useGetChatRooms";
import useGetChatMessages from "apis/hooks/chats/useGetChatMessages";
import { ChatMessages, ChatRoom } from "apis/types/chat";
import { formatCreatedAt, formatTime } from "@utils/dateUtils";
import { format, parseISO } from "date-fns";
import usePatchChatRoomThumbnails from "apis/hooks/chats/usePatchChatRoomThumbnails";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { ExplainModal, MemberGroup } from "@components/index";
import { Role } from "types/role";



const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { data } = useGetChatRooms();
  const { mutate: patchChatRoomThumbnails } = usePatchChatRoomThumbnails();
  const chatRooms = (data?.result ?? []) as ChatRoom[];
  console.log(chatRooms);

  const messageListRef = useRef<HTMLDivElement | null>(null);
  const topSentinelRef = useRef<HTMLDivElement | null>(null);

  const {
    data: messagesData,
    fetchPreviousPage,
    hasPreviousPage,
    refetch,
    isFetchingPreviousPage,
  } = useGetChatMessages({
    chatRoomId: selectedRoomId ?? 0,
    cursor: null,
    size: 20,
    direction: null,
  });

  const allChats = messagesData?.pages.flatMap((page) => page.result?.chats ?? []) ?? [];
  const selectedRoom = chatRooms.find((room: ChatRoom) => room.chatRoomId === selectedRoomId);

  const [isModalOpen, setIsModalOpen] = useState(false);
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
      if (file) {
        setSelectedFile(file);
      }
    };
    input.click();
  };

  const handleUploadCoverClick = () => {
    if (selectedRoomId !== null && selectedFile) {
      patchChatRoomThumbnails({ chatRoomId: selectedRoomId, file: selectedFile });
    }
  };

  useEffect(() => {
    if (messageListRef.current && messagesData?.pages) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messagesData, selectedRoomId]);

  useEffect(() => {
    const list = messageListRef.current;
    if (!list) return;

    const handleScroll = () => {
      if (list.scrollTop === 0 && hasPreviousPage && !isFetchingPreviousPage) {
        fetchPreviousPage();
      }
    };

    list.addEventListener("scroll", handleScroll);
    return () => list.removeEventListener("scroll", handleScroll);
  }, [hasPreviousPage, isFetchingPreviousPage, fetchPreviousPage]);

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
          {isModalOpen && (
            <ExplainModal
              type="normal"
              title={`채팅방 커버 이미지를 변경할까요?`}
              buttonText="변경하기"
              onButtonClick={handleUploadCoverClick}
              onCancel={() => setIsModalOpen(false)} >
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="미리보기"
                  style={{ width: '100%', maxHeight: '20rem', objectFit: 'contain', borderRadius: '8px' }}
                />
              ) : (
                <div css={fileUploadContainer}>
                  <div css={fileUploadText}>
                    파일을 업로드하세요.
                  </div>
                  <button css={fileUploadButton} onClick={handleCoverClick}>
                    파일 선택
                  </button>
                </div>
              )}
            </ExplainModal>
          )}
          <div css={chatTopBarStyle}>
            <div css={selectedRoomStyle}>
              {selectedRoom && <MemberGroup
                memberRoleList={
                  selectedRoom.participants.map((member) =>
                    member.role as Role)
                } />}
              <div css={chatRoomHeaderStyle}>{selectedRoom ? selectedRoom.chatRoomName : "채팅할 팟을 선택해 주세요."}</div>
              <div css={chatRoomTextStyle} onClick={() => setIsModalOpen(true)}><ImageIcon />커버 추가</div>
            </div>
          </div>

          {!selectedRoom ? (
            <div css={chatPlaceholderStyle}>
              <SelectChatIcon />
              <div css={emptyMessageStyle}>채팅할 팟을 선택해 주세요.</div>
            </div>
          ) : allChats.length === 0 ? (
            <div css={chatPlaceholderStyle}>
              <WavingHandIcon />
              <div css={emptyMessageStyle}>첫 대화를 시작해보세요!</div>
            </div>
          ) : (
            <div css={messageListStyle} ref={messageListRef}>
              <div ref={topSentinelRef} />
              {groupMessagesByDate(allChats).map(([date, chats]) => (
                <div key={date}>
                  <div css={dateDividerStyle}>
                    {format(new Date(date), "yyyy년 M월 d일")}
                  </div>
                  {chats.map((chat) => (
                    <MessageBubble key={chat.chatId} message={chat} isMine={chat.userName === "나"} />
                  ))}
                </div>
              ))}
            </div>
          )}

          <div css={inputContainerStyle}>
            <textarea css={textAreaStyle} placeholder="메시지를 입력해 보세요." />
            <button css={sendButtonStyle}>전송</button>
          </div>
        </div>
      </div >
    </div >
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
  const navigate = useNavigate();


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    console.log(message.userId);
    setIsModalOpen(true);
  };

  return (
    <div css={messageWrapperStyle(isMine)}>
      {isModalOpen && (
        <ExplainModal
          type="normal"
          title={`지원자의 프로필을 살펴 보세요!\n다양한 활동이 궁금하신가요?`}
          buttonText="지원자 활동 더보기"
          onButtonClick={() => navigate(`${routes.userProfile}/${message.userId}`)}
          onCancel={() => setIsModalOpen(false)} >
          <div css={modalProfileStyle}>
            <img src={roleImages[message.role]} alt="profile" css={modalProfileImageStyle} onClick={handleProfileClick} />
            <div css={modalNicknameTextStyle}>{message.userName}</div>
          </div>
        </ExplainModal>
      )}
      {!isMine && (
        <img src={roleImages[message.role]} alt="profile" css={profileImageStyle} onClick={handleProfileClick} />
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
