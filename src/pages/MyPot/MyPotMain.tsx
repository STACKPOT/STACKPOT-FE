import { container, headerStyle, textStyle, iconStyle, tabsContainer, tabsTextStyle } from "./MyPotMain.style";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import theme from "@styles/theme";
import routes from "@constants/routes";
import { PotIcon } from "@assets/svgs";

const MyPotMainPage: React.FC = () => {
  const tabs = [
    { label: "업무 현황", path: routes.myPot.base },
    { label: "캘린더", path: routes.myPot.calendar },
  ];

  const title = "STACKPOT"; // 데이터 어떻게 넘어올지 몰라서 일단 이렇게 했습니다
  const location = useLocation();

  return (
    <div css={container}>
      <header css={headerStyle}>
        <div css={textStyle}>{title}</div>
        <PotIcon css={iconStyle} />
      </header>
      <div css={tabsContainer}>
        {tabs.map((tab) => {
          const isActive =
            location.pathname === tab.path ||
            (tab.path === routes.myPot.base && location.pathname.startsWith(`${routes.myPot.base}/`));

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
      </div>
      <Outlet />
    </div>
  );
};

export default MyPotMainPage;
