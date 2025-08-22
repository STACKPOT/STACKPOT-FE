import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  container,
  headerStyle,
  textStyle,
  tabsContainer,
  navLinkStyle,
  iconStyle,
  titleStyle,
  titleButtonStyle,
  actionButtonStyle,
  memberListContainer,
  inputStyle,
} from "./MyPotDetail.style";
import routes from "@constants/routes";
import { ArrowLeftRoundIcon, ChattingIcon } from "@assets/svgs";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { prevButtonStyle } from "../TaskDetail/TaskDetail.style";
import { useState } from "react";
import { ExplainModal, MemberCard } from "@components/index";
import { Role } from "types/role";
import { css } from "@emotion/react";
import { useGetMyPotOwner } from "apis/hooks/myPots/useGetMyPotOwner";
import { usePatchRename } from "apis/hooks/myPots/usePatchRename";

const MyPotDetail: React.FC = () => {
  const { potId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isModified, setIsModified] = useState(false);
  const [titleInput, setTitleInput] = useState("");

  const tabs = [
    {
      label: "업무 현황",
      path: `${routes.myPot.base}/${routes.task}/${potId}`,
    },
    {
      label: "캘린더",
      path: `${routes.myPot.base}/${routes.calendar}/${potId}`,
    },
  ];

  const potIdNumber = Number(potId);

  const { data } = useGetMyPotTodo({
    potId: potIdNumber,
    page: 1,
    size: 1,
  });

  const { data: isOwner } = useGetMyPotOwner({ potId: potIdNumber });
  const { mutate } = usePatchRename();

  const handlePrev = () => {
    navigate(`${routes.myPot.base}`);
  };

  const handleChattingClick = () => {
    navigate(`${routes.chat}`);
    //TODO: 해당 채팅방으로 연결
  };

  const handleModifyClick = () => {
    setIsModified(true);
  };

  const handlePermissionClick = () => {
    setIsModalOpen(true);
  };

  const handleButtonClick = () => {
    //TODO: 권한설정 모달
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && titleInput.trim()) {
      mutate({ potId: potIdNumber, potName: titleInput });
      setIsModified(false);
    }
  };

  // TODO: API 연결 후 삭제
  const dummyMembers = [
    {
      userId: 1,
      nickname: "눈물을 마구 흘리는 브로콜리",
      role: "BACKEND",
    },
    {
      userId: 2,
      nickname: "웃는 스파게티",
      role: "FRONTEND",
    },
    {
      userId: 3,
      nickname: "화난 당근",
      role: "DESIGN",
    },
    {
      userId: 3,
      nickname: "화난 당근",
      role: "DESIGN",
    },
    {
      userId: 3,
      nickname: "화난 당근",
      role: "DESIGN",
    },
  ];

  return (
    <>
      <main css={container}>
        <div css={titleStyle}>
          <div css={headerStyle}>
            <button onClick={handlePrev} css={prevButtonStyle}>
              <ArrowLeftRoundIcon css={iconStyle} />
            </button>
            <ChattingIcon onClick={handleChattingClick} />

            {isModified ? (
              <input
                css={inputStyle}
                placeholder={data?.title}
                onChange={(e) => setTitleInput(e.target.value)}
                onKeyDown={handleTitleKeyDown}
              />
            ) : (
              <h2 css={textStyle}>{data?.title ?? null}</h2>
            )}
          </div>
          {isOwner === true && (
            <div css={titleButtonStyle}>
              <button
                css={actionButtonStyle("modify")}
                onClick={handleModifyClick}
              >
                수정
              </button>
              <button
                css={actionButtonStyle("permission")}
                onClick={handlePermissionClick}
              >
                권한 설정
              </button>
            </div>
          )}
        </div>
        <div css={tabsContainer}>
          {tabs.map((tab) => {
            const isActive = location.pathname.includes(tab.path);
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                css={[navLinkStyle(isActive)]}
              >
                {tab.label}
              </NavLink>
            );
          })}
        </div>
        <Outlet />
      </main>
      {isModalOpen && (
        <ExplainModal
          type="normal"
          buttonText="팀장 위임"
          title="누구에게 팀장을 위임할까요?"
          onButtonClick={handleButtonClick}
          onCancel={handleCancelModal}
          customContainerStyle={css({ width: "78rem" })}
        >
          <div css={memberListContainer}>
            {dummyMembers.map((member) => (
              <MemberCard
                key={member.userId}
                userId={member.userId}
                nickname={member.nickname}
                role={member.role as Role}
                type="selection"
                selected={selectedUserId === member.userId}
                onClick={() => setSelectedUserId(member.userId)}
              />
            ))}
          </div>
        </ExplainModal>
      )}
    </>
  );
};

export default MyPotDetail;
