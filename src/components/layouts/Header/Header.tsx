import { ArrowDropdownIcon, Logo, SearchIcon } from "@assets/svgs";
import {
  guestProfileStyle,
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
import usePostLogout from "apis/hooks/users/userPostLogout";
import { useAuthStore } from "stores/useAuthStore";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const role = useAuthStore((state) => state.role);

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code
&scope=account_email
&prompt=login`;

  const refreshToken = localStorage.getItem("refreshToken");

  const { mutate } = usePostLogout();

  const handleClick = () => {
    window.location.href = link;
  };

  const handleSearchClick = () => {
    navigate(routes.search);
  };

  const handleMenuClick = () => {
    //드롭다운 연결
    if (refreshToken) {
      mutate(refreshToken);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, [localStorage.getItem("accessToken")]);

  const roleProfileImage = roleImages[role as keyof typeof roleImages];

  const guestMode = role === "DEFAULT";

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

          <div css={profileContainer}>
            <img
              css={guestMode ? guestProfileStyle : profileStyle}
              src={roleProfileImage}
              alt="profileImage"
            />
            {!guestMode && (
              <ArrowDropdownIcon
                type="button"
                css={iconStyle}
                onClick={handleMenuClick}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
