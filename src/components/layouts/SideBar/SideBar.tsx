import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  MyPotIcon,
  HomeIcon,
  HomeFilledIcon,
  PotIcon,
  LogoFilledIcon,
  ChatIcon,
  MyPotFilledIcon,
  ChatFilledIcon,
} from "@assets/svgs";
import {
  container,
  iconStyle,
  potIconStyle,
  mainContainer,
  labelStyle,
  getNavLinkStyle,
  menuItemStyle,
} from "./SideBar.style";
import routes from "@constants/routes";
import LoginModal from "@components/commons/Modal/LoginModal/LoginModal";

const menuItems = [
  {
    to: routes.home,
    icon: <HomeIcon css={iconStyle} />,
    activeIcon: <HomeFilledIcon css={iconStyle} />,
    label: "홈",
  },
  {
    to: routes.pot.base,
    icon: <PotIcon css={potIconStyle} />,
    activeIcon: <LogoFilledIcon css={potIconStyle} />,
    label: "모든팟",
  },
  {
    to: routes.myPot.base,
    icon: <MyPotIcon css={iconStyle} />,
    activeIcon: <MyPotFilledIcon css={iconStyle} />,
    label: "나의팟",
  },
  {
    to: routes.chat,
    icon: <ChatIcon css={iconStyle} />,
    activeIcon: <ChatFilledIcon css={iconStyle} />,
    label: "채팅",
  },
];

const SideBar: React.FC = () => {
  const [top, setTop] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const initialTop = window.innerHeight / 2 + window.scrollY;
    setTop(initialTop);

    const debounce = (func: (...argc: any) => void, wait: number) => {
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
    <>
      <div css={mainContainer(top)}>
        <div css={container}>
          {menuItems.map(({ to, icon, activeIcon, label }, index) => {
            const accessToken = localStorage.getItem("accessToken");
            const isPrivateRoute =
              to === routes.myPot.base || to === routes.chat;

            return (
              <NavLink
                key={index}
                to={to}
                style={({ isActive }) => getNavLinkStyle(isActive)}
                css={menuItemStyle}
                onClick={(e) => {
                  if (!accessToken && isPrivateRoute) {
                    e.preventDefault();
                    setIsLoginModalOpen(true);
                  }
                }}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? activeIcon : icon}
                    <p css={labelStyle}>{label}</p>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal onCancel={() => setIsLoginModalOpen(false)} />
      )}
    </>
  );
};

export default SideBar;
