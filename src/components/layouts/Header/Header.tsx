import { Logo } from "@assets/svgs";
import { headerStyle } from "./Header.style";
import Button from "@components/commons/Button/Button";
import theme from "@styles/theme";

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <Logo />
      <Button color={theme.color.point.hero}>로그인/회원가입</Button>
    </header>
  );
};

export default Header;
