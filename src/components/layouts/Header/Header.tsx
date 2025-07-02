import { ArrowDropdownIcon, BellIcon, Logo, SearchIcon } from "@assets/svgs";
import {
  bellContainer,
  guestProfileStyle,
  headerStyle,
  iconContainer,
  iconStyle,
  logoStyle,
  profileContainer,
  profileStyle,
  searchIconStyle,
} from "./Header.style";
import Button from "@components/commons/Button/Button";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { roleImages } from "@constants/roleImage";
import ProfileDropdown from "@components/commons/Dropdown/ProfileDropdown/ProfileDropdown";
import Notification from "./components/Notification/Notification";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [roleProfileImage, setRoleProfileImage] = useState<string>("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const guestMode = role === "UNKNOWN";

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code
&scope=account_email
&prompt=login`;

  const handleClick = () => {
    window.location.href = link;
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
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleNotificationClick = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  return (
    <div ref={ref}>
      <header css={headerStyle(isHomePage)}>
        <Logo css={logoStyle(isHomePage)} onClick={handleLogoClick} />
        {!accessToken ? (
          <Button variant="entry" onClick={handleClick}>
            로그인/회원가입
          </Button>
        ) : (
          <div css={iconContainer}>
            <SearchIcon
              type="button"
              css={searchIconStyle(isHomePage)}
              onClick={handleSearchClick}
            />
            <div css={bellContainer}>
              <BellIcon onClick={handleNotificationClick} />
              {isNotificationOpen && <Notification />}
            </div>

            <div css={profileContainer}>
              <img
                css={guestMode ? guestProfileStyle : profileStyle}
                src={roleProfileImage}
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
    </div>
  );
};

export default Header;
