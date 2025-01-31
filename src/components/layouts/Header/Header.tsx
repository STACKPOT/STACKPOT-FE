import { Logo } from "@assets/svgs";
import { headerStyle } from "./Header.style";
import Button from "@components/commons/Button/Button";

const Header: React.FC = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${
    import.meta.env.VITE_REDIRECT_URI
  }&response_type=code
&scope=account_email
&prompt=login`;

  const hadleClick = () => {
    window.location.href = link;
  };

  return (
    <header css={headerStyle}>
      <Logo />
      <Button variant="login" onClick={hadleClick}>
        로그인/회원가입
      </Button>
    </header>
  );
};

export default Header;
