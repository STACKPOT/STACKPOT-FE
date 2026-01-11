import { container, tabsContainer, tabsTextStyle } from "./PotMain.style";
import { NavLink, Outlet } from "react-router-dom";
import routes from "@constants/routes";

const PotMain: React.FC = () => {
  const accessToken = localStorage.getItem("accessToken");

  const tabs = accessToken
    ? [
        { label: "모든 팟", path: routes.pot.base },
        { label: "지원한 팟", path: routes.pot.applied },
      ]
    : [{ label: "모든 팟", path: routes.pot.base }];

  return (
    <main css={container}>
      <div css={tabsContainer}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === routes.pot.base}
            css={tabsTextStyle}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </main>
  );
};

export default PotMain;
