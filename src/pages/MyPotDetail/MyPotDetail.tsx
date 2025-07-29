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
} from "./MyPotDetail.style";
import routes from "@constants/routes";
import { ArrowLeftRoundIcon, ChattingIcon } from "@assets/svgs";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { prevButtonStyle } from "../TaskDetail/TaskDetail.style";

const MyPotDetail: React.FC = () => {
  const { potId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handlePrev = () => {
    navigate(`${routes.myPot.base}`);
  };

  const handleChattingClick = () => {
    navigate(`${routes.chat}`);
    //TODO: 해당 채팅방으로 연결
  };

  return (
    <>
      <main css={container}>
        <header css={headerStyle}>
          <button onClick={handlePrev} css={prevButtonStyle}>
            <ArrowLeftRoundIcon css={iconStyle} />
          </button>
          <h2 css={textStyle}>{data?.title ?? null}</h2>
          <ChattingIcon onClick={handleChattingClick} />
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
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default MyPotDetail;
