import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MyPotIcon, HomeIcon, PotIcon } from "@assets/svgs";
import {
  container,
  menuContainer,
  divider,
  iconStyle,
  potIconStyle,
  profileStyle,
  mainContainer,
} from "./SideBar.style";
import theme from "@styles/theme";
import routes from "@constants/routes";
import { MushroomImage } from "@assets/images";
import SideBarProfileModal from "../SideBarProfileModal/SideBarProfileModal";

const getNavLinkStyle = (isActive: boolean) => ({
  color: isActive ? theme.color.point.hero : theme.color.interactive.inactive,
});

const menuItems = [
  { to: routes.home, icon: <HomeIcon stroke="currentColor" css={iconStyle} /> },
  {
    to: routes.pot.base,
    icon: <PotIcon css={potIconStyle} />,
  },
  {
    to: routes.myPot.base,
    icon: <MyPotIcon stroke="currentColor" css={iconStyle} />,
  },
];

const SideBar: React.FC = () => {
  const [top, setTop] = useState(0);
  const [footerTop, setFooterTop] = useState<number | null>(null);
  const [profileModal, setProfileModal] = useState<boolean>(false);

  const handleClickProfile = () => {
    setProfileModal(!profileModal);
  }

  useEffect(() => {
    const initialTop = window.innerHeight / 2 + window.scrollY;
    setTop(initialTop);

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      const footerOffsetTop =
        footerElement.getBoundingClientRect().top + window.scrollY;
      setFooterTop(footerOffsetTop);
    }

    const debounce = (func: Function, wait: number) => {
      let timeout: number | null = null;
      return (...args: any[]) => {
        if (timeout) clearTimeout(timeout);
        timeout = window.setTimeout(() => func(...args), wait);
      };
    };

    const handleScroll = debounce(() => {
      const currentTop = window.innerHeight / 2 + window.scrollY;
      if (footerTop && currentTop + 370 > footerTop) {
        setTop(footerTop - 370);
      } else {
        setTop(currentTop);
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerTop]);

  return (
    <div css={mainContainer(top)}>
      <div css={container}>
        <div css={menuContainer}>
          <img css={profileStyle} src={MushroomImage} onClick={handleClickProfile} />
          <div css={divider} />
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
      {profileModal && <SideBarProfileModal onClose={() => setProfileModal(false)} />}
    </div>
  );
};

export default SideBar;
