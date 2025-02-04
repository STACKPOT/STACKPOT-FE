import { Logo, SearchIcon } from "@assets/svgs";
import { headerStyle, iconStyle } from "./Header.style";
import Button from "@components/commons/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

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
    setAccessToken(token);
  }, [localStorage.getItem("accessToken")]);

  return (
    <header css={headerStyle}>
      <Logo />
      {!accessToken ? (
        <Button variant="entry" onClick={hadleClick}>
          로그인/회원가입
        </Button>
      ) : (
        <SearchIcon type="button" css={iconStyle} onClick={handleSearchClick} />
      )}
    </header>
  );
};

export default Header;
