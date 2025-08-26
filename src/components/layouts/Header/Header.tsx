import {
  ArrowDropdownIcon,
  BellFilledIcon,
  BellIcon,
  Logo,
  SearchIcon,
} from "@assets/svgs";
import {
  bellContainer,
  guestProfileStyle,
  headerIconStyle,
  headerStyle,
  iconContainer,
  iconStyle,
  logoStyle,
  profileContainer,
  profileStyle,
} from "./Header.style";
import Button from "@components/commons/Button/Button";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { roleImages } from "@constants/roleImage";
import ProfileDropdown from "@components/commons/Dropdown/ProfileDropdown/ProfileDropdown";
import LoginModal from "@components/commons/Modal/LoginModal/LoginModal";
import Notification from "./components/Notification/Notification";
import { ProfileImage } from "@assets/images";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [roleProfileImage, setRoleProfileImage] = useState<string>("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const guestMode = role === "UNKNOWN";

  const handleClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleSearchClick = () => {
    navigate(routes.search);
  };

  const handleMenuClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const isHomePage = location.pathname === routes.home;

  const handleLogoClick = () => {
    navigate(routes.home);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, [localStorage.getItem("accessToken")]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setRole(role);
    const profileImage = roleImages[role as keyof typeof roleImages] || "";
    setRoleProfileImage(profileImage);
  }, [localStorage.getItem("role")]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        ref.current &&
        !ref.current.contains(target) &&
        notificationRef.current &&
        !notificationRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  return (
    <div ref={ref}>
      <header css={headerStyle(isHomePage)}>
        <Logo css={logoStyle(isHomePage)} onClick={handleLogoClick} />
        {!accessToken ? (
          <Button variant="cta" onClick={handleClick}>
            로그인/회원가입
          </Button>
        ) : (
          <div css={iconContainer}>
            <SearchIcon
              type="button"
              css={headerIconStyle(isHomePage)}
              onClick={handleSearchClick}
            />
            <div css={bellContainer}>
              {isNotificationOpen ? (
                <BellFilledIcon
                  css={headerIconStyle(isHomePage)}
                  onClick={handleNotificationClick}
                />
              ) : (
                <BellIcon
                  css={headerIconStyle(isHomePage)}
                  onClick={handleNotificationClick}
                />
              )}

              {isNotificationOpen && (
                <div ref={notificationRef}>
                  <Notification onClose={() => setIsNotificationOpen(false)} />
                </div>
              )}
            </div>

            <div css={profileContainer}>
              <img
                css={guestMode ? guestProfileStyle : profileStyle}
                src={guestMode ? ProfileImage : roleProfileImage}
                alt="profileImage"
              />
              {!guestMode && (
                <ArrowDropdownIcon
                  type="button"
                  css={iconStyle(isHomePage)}
                  onClick={handleMenuClick}
                />
              )}
              {isDropdownOpen && (
                <ProfileDropdown onClose={() => setIsDropdownOpen(false)} />
              )}
            </div>
          </div>
        )}
      </header>
      {isLoginModalOpen && (
        <LoginModal onCancel={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default Header;
