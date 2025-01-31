import { Logo } from "@assets/svgs";
import { headerStyle } from "./Header.style";
import Button from "@components/commons/Button/Button";

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <Logo />
      <Button variant="login">로그인/회원가입</Button>
    </header>
  );
};

export default Header;
