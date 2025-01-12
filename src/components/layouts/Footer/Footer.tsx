import { css } from "@emotion/react";
import { Logo } from "@assets/svgs";
import theme from "@styles/theme";
import {
  footerStyle,
  contentStyle,
  sectionStyle,
  linkStyle,
  textStyle,
  legalStyle,
} from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <div css={footerStyle}>
      <div css={contentStyle}>
        <Logo />
        <div css={sectionStyle}>
          <div css={textStyle}>TEAM STACKPOT</div>
          <div css={linkStyle}>
            <div>고객센터 | 010-1234-5678</div>
          </div>
          <div css={linkStyle}>
            <div>메일 | stackpot@example.com</div>
          </div>
        </div>
        <div css={sectionStyle}>
          <div css={textStyle}>이용약관</div>
          <div css={textStyle}>개인정보처리방침</div>
          <div css={textStyle}>문의하기</div>
        </div>
        <div css={legalStyle}>© 2024 stackpot. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
