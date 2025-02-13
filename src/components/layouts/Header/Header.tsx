import { ArrowDropdownIcon, Logo, SearchIcon } from "@assets/svgs";
import {
  headerStyle,
  iconContainer,
  iconStyle,
  profileContainer,
  profileStyle,
  searchIconStyle,
} from "./Header.style";
import Button from "@components/commons/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { roleImages } from "@constants/roleImage";
import { ProfileImage } from "@assets/images";

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

  const handleClick = () => {
    window.location.href = link;
  };

  const handleSearchClick = () => {
    navigate(routes.search);
  };

  const handleMenuClick = () => {
    //드롭다운 연결
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    setAccessToken(token);
    setRole(role);
  }, [localStorage.getItem("accessToken"), localStorage.getItem("role")]);

  const roleProfileImage = roleImages[role];

  return (
    <header css={headerStyle}>
      <Logo />
      {!accessToken ? (
        <Button variant="entry" onClick={handleClick}>
          로그인/회원가입
        </Button>
      ) : (
        <div css={iconContainer}>
          <SearchIcon
            type="button"
            css={searchIconStyle}
            onClick={handleSearchClick}
          />
          {role === "" ? (
            <img css={profileStyle} src={ProfileImage} alt="profileImage" />
          ) : (
            <div css={profileContainer}>
              <img
                css={profileStyle}
                src={roleProfileImage}
                alt="profileImage"
              />
              <ArrowDropdownIcon
                type="button"
                css={iconStyle}
                onClick={handleMenuClick}
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
