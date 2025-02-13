import { Logo, ProfileIcon, SearchIcon } from "@assets/svgs";
import {
  headerStyle,
  iconContainer,
  iconStyle,
  profileStyle,
} from "./Header.style";
import Button from "@components/commons/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { roleImages } from "@constants/roleImage";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [role, setRole] = useState(localStorage.getItem("role"));

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code
&scope=account_email
&prompt=login`;

  const hadleClick = () => {
    window.location.href = link;
  };

  const handleSearchClick = () => {
    navigate(routes.search);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    setAccessToken(token);
    setRole(role);
  }, [localStorage.getItem("accessToken"), localStorage.getItem("role")]);

  const profileImage = roleImages[role];

  return (
    <header css={headerStyle}>
      <Logo />
      {!accessToken ? (
        <Button variant="entry" onClick={hadleClick}>
          로그인/회원가입
        </Button>
      ) : (
        <div css={iconContainer}>
          <SearchIcon
            type="button"
            css={iconStyle}
            onClick={handleSearchClick}
          />
          {!role ? (
            <ProfileIcon />
          ) : (
            <img css={profileStyle} src={profileImage} alt="profileImage" />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
