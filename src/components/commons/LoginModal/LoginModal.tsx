import { Kakao } from "@assets/svgs";
import { dialogStyles } from "./LoginModal.style";
import { CloseIcon, Logo } from "@assets/svgs";
import theme from "@styles/theme";
import { css } from "@emotion/react";

interface LoginModalProps {
  onLogin: () => void;
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onCancel }) => {
  return (
    <div css={dialogStyles.container}>
      <header css={dialogStyles.header}>
        <CloseIcon onClick={onCancel} type="button" />
      </header>
      <div css={dialogStyles.body}>
        <Logo />
        <div css={dialogStyles.section}>
          <p
            css={css`
              color: ${theme.color.point.navy};
              ${theme.font.title1};
            `}
          >
            STACKPOT에 오신 것을 환영합니다!
          </p>
          <p
            css={css`
              color: ${theme.color.object.assistive};
              ${theme.font.caption3};
            `}
          >
            로그인하시고 프로젝트를 진행해 보세요.
          </p>
        </div>
        <Kakao onClick={onLogin} />
        <p
          css={css`
            color: ${theme.color.object.hero};
            ${theme.font.caption2};
          `}
        >
          로그인 시,{" "}
          <a href="#" css={dialogStyles.termsLink}>
            서비스 이용약관
          </a>
          에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
