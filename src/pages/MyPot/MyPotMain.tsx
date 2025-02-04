import { container, headerStyle, textStyle, iconStyle, tabsContainer, tabsTextStyle, viewId, viewTextStyle } from "./MyPotMain.style";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import theme from "@styles/theme";
import routes from "@constants/routes";
import { KaKaoTalkIcon, PotIcon } from "@assets/svgs";

const MyPotMainPage: React.FC = () => {
  const tabs = [
    { label: "업무 현황", path: routes.myPot.base },
    { label: "캘린더", path: routes.myPot.calendar },
  ];

  const title = "STACKPOT"; 
  const location = useLocation();

  const isPotPage = location.pathname === routes.myPot.base || location.pathname.startsWith(routes.myPot.base + "/") && !location.pathname.includes("calendar");

  const showViewId = location.pathname === routes.myPot.base || isPotPage;

  return (
    <main css={container}>
      <header css={headerStyle}>
        <div css={textStyle}>{title}</div>
        <PotIcon css={iconStyle} />
      </header>
      <div css={tabsContainer}>
        {tabs.map((tab) => {
          const isActive =
            (tab.path === routes.myPot.base && location.pathname === tab.path) || 
            (tab.path === routes.myPot.base && isPotPage) ||
            (tab.path === routes.myPot.calendar && location.pathname === tab.path);

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
            <text css={viewTextStyle}>아이디 보기</text>
          </div>
        )}
      </div>
      <Outlet />
    </main>
  );
};

export default MyPotMainPage;
