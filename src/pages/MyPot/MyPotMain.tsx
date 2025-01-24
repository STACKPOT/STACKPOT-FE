import { container, headerStyle, textStyle, iconStyle, tabsContainer, tabsTextStyle } from "./MyPotMain.style";
import { NavLink, Outlet } from "react-router-dom";
import theme from "@styles/theme";
import routes from "@constants/routes";
import { PotIcon } from "@assets/svgs";

const MyPotMainPage: React.FC = () => {
  const tabs = [
    { label: "업무 현황", path: routes.myPot.base },
    { label: "캘린더", path: routes.myPot.calendar },
  ];

  const title = "STACKPOT";

  return (
    <div css={container}>
      <header css={headerStyle}>
        <div css={textStyle}>{title}</div>
        <PotIcon css={iconStyle}/>
      </header>
      <div css={tabsContainer}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === routes.myPot.base}
            css={tabsTextStyle} 
            style={({ isActive }) => ({
              color: isActive ? theme.color.point.hero : theme.color.interactive.inactive,
              textDecoration: "none",
            })}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default MyPotMainPage;
