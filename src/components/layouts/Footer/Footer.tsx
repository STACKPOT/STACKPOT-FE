import { Logo } from "@assets/svgs";
import { footerStyle, contentStyle, sectionStyle } from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      <div css={contentStyle}>
        <Logo />
        <div css={sectionStyle}>
          <p>TEAM STACKPOT</p>
          <p>메일 | stackpot@example.com</p>
        </div>
        <div css={sectionStyle}>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>문의하기</p>
        </div>
        <div css={sectionStyle}>
          <p>© 2024 stackpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
