import {
  container,
  headerStyle,
  textStyle,
  iconStyle,
  tabsContainer,
  tabsTextStyle,
  viewId,
  viewTextStyle,
} from "./MyPotMain.style";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import theme from "@styles/theme";
import routes from "@constants/routes";
import { KaKaoTalkIcon, PotIcon } from "@assets/svgs";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";

const MyPotMainPage: React.FC = () => {
  const { potId } = useParams();

  const tabs = [
    { label: "업무 현황", path: `${routes.myPot.base}/${routes.task}/${potId}` }, 
    { label: "캘린더", path: `${routes.myPot.base}/${routes.calendar}/${potId}`}, 
  ];
  const { data } = useGetMyPotTodo({
    potId: Number(potId),
    page: 1,
    size: 1,
  });

  const location = useLocation();
  const showViewId = location.pathname === `${routes.myPot.base}/${routes.task}/${potId}`;

  return (
    <main css={container}>
      <header css={headerStyle}>
        <div css={textStyle}>{data?.title ?? null}</div>
        <PotIcon css={iconStyle} />
      </header>
      <div css={tabsContainer}>
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              css={tabsTextStyle}
              style={{
                color: isActive
                  ? theme.color.point.hero
                  : theme.color.interactive.inactive,
                textDecoration: "none",
              }}
            >
              {tab.label}
            </NavLink>
          );
        })}

        {showViewId && (
          <div css={viewId}>
            <KaKaoTalkIcon />
            <p css={viewTextStyle}>아이디 보기</p>
          </div>
        )}
      </div>
      <Outlet />
    </main>
  );
};

export default MyPotMainPage;
