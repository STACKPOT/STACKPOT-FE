import {
  container,
  headerStyle,
  textStyle,
  tabsContainer,
  tabsTextStyle,
  viewId,
  viewTextStyle,
  iconStyle
} from "./MyPotMain.style";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import theme from "@styles/theme";
import routes from "@constants/routes";
import { KaKaoTalkIcon } from "@assets/svgs";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { prevButtonStyle } from "./MyPotStatus/TaskDetail/TaskDetail.style";
import { ArrowLeftIcon } from "@mui/x-date-pickers"
import { useGetMyPotOwner } from "apis/hooks/myPots/useGetMyPotOwner";
import { MemberIdModalWrapper } from "./components/index";
import { useState } from "react";

const MyPotMainPage: React.FC = () => {
  const { potId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const tabs = [
    { label: "업무 현황", path: `${routes.myPot.base}/${routes.task}/${potId}` },
    { label: "캘린더", path: `${routes.myPot.base}/${routes.calendar}/${potId}` },
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
      <MemberIdModalWrapper isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

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
                css={tabsTextStyle}
                style={{
                  color: isActive ? theme.color.point.hero : theme.color.interactive.inactive,
                  textDecoration: "none",
                }}
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

export default MyPotMainPage;
