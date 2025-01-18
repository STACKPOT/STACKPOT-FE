import { container, selectContainer, tabsContainer, tabsTextStyle } from "./PotMain.style";
import { NavLink, Outlet } from "react-router-dom";
import theme from "@styles/theme";

const PotMain: React.FC = () => {
  const tabs = [
    { label: "모든 팟", path: "/pot" },
    { label: "지원한 팟", path: "/pot/applied" },
    { label: "내가 만든 팟", path: "/pot/madebyme" },
  ];

  return (
    <main css={container}>
      <div css={selectContainer}>
        <div css={tabsContainer}>
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === "/pot"}
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
      </div>
      <Outlet />
    </main>
  );
};

export default PotMain;
