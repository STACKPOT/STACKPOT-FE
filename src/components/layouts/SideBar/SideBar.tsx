import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MyPotIcon, HomeIcon, PotIcon } from "@assets/svgs";
import {
  container,
  iconStyle,
  potIconStyle,
  mainContainer,
} from "./SideBar.style";
import theme from "@styles/theme";
import routes from "@constants/routes";

const getNavLinkStyle = (isActive: boolean) => ({
  color: isActive ? theme.color.point.hero : theme.color.interactive.inactive,
});

const menuItems = [
  { to: routes.home, icon: <HomeIcon css={iconStyle} /> },
  {
    to: routes.pot.base,
    icon: <PotIcon css={potIconStyle} />,
  },
  {
    to: routes.myPot.base,
    icon: <MyPotIcon css={iconStyle} />,
  },
];

const SideBar: React.FC = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const initialTop = window.innerHeight / 2 + window.scrollY;
    setTop(initialTop);

    const debounce = (func: Function, wait: number) => {
      let timeout: number | null = null;
      return (...args: any[]) => {
        if (timeout) clearTimeout(timeout);
        timeout = window.setTimeout(() => func(...args), wait);
      };
    };

    const handleScroll = debounce(() => {
      const currentTop = window.innerHeight / 2 + window.scrollY;
      setTop(currentTop);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={mainContainer(top)}>
      <div css={container}>
        {menuItems.map(({ to, icon }, index) => (
          <NavLink
            key={index}
            to={to}
            style={({ isActive }) => getNavLinkStyle(isActive)}
          >
            {icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
