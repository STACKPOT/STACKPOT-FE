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
  viewId,
  viewTextStyle,
  iconStyle,
} from "./MyPotDetail.style";
import routes from "@constants/routes";
import { KaKaoTalkIcon } from "@assets/svgs";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { prevButtonStyle } from "../TaskDetail/TaskDetail.style";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { useGetMyPotOwner } from "apis/hooks/myPots/useGetMyPotOwner";
import { useState } from "react";

const MyPotDetail: React.FC = () => {
  const { potId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

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

  const { data: check } = useGetMyPotOwner({ potId: potIdNumber });

  const { data } = useGetMyPotTodo({
    potId: potIdNumber,
    page: 1,
    size: 1,
  });

  const handlePrev = () => {
    navigate(`${routes.myPot.base}`);
  };

  return (
    <>
      <main css={container}>
        <header css={headerStyle}>
          <button onClick={handlePrev} css={prevButtonStyle}>
            <ArrowLeftIcon css={iconStyle} />
          </button>
          <div css={textStyle}>{data?.title ?? null}</div>
        </header>
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
          {(check?.result ?? false) && (
            <button css={viewId} onClick={handleOpenModal} type="button">
              <KaKaoTalkIcon />
              <p css={viewTextStyle}>아이디 보기</p>
            </button>
          )}
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default MyPotDetail;
