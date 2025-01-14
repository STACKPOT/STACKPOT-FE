import { NavLink } from "react-router-dom";
import { MyPotIcon, HomeIcon, PotIcon, Profile, SetUpIcon } from "@assets/svgs";

import { container, menuContainer, divider } from "./SideBar.style";
import theme from "@styles/theme";

const SideBar: React.FC = () => {
  return (
    <div css={container}>
      <div css={menuContainer}>
        <Profile />
        <div css={divider} />

        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive
              ? theme.color.point.neon
              : theme.color.interactive.inactive,
          })}
        >
          <HomeIcon stroke="currentColor" />
        </NavLink>

        <NavLink
          to="/spot"
          style={({ isActive }) => ({
            color: isActive
              ? theme.color.point.neon
              : theme.color.interactive.inactive,
          })}
        >
          <PotIcon stroke="currentColor" />
        </NavLink>

        <NavLink
          to="/my-pot"
          style={({ isActive }) => ({
            color: isActive
              ? theme.color.point.neon
              : theme.color.interactive.inactive,
          })}
        >
          <MyPotIcon stroke="currentColor" />
        </NavLink>

        <NavLink
          to="/setup"
          style={({ isActive }) => ({
            color: isActive
              ? theme.color.point.neon
              : theme.color.interactive.inactive,
          })}
        >
          <SetUpIcon stroke="currentColor" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
