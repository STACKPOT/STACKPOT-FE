import { Kakao } from "@assets/svgs";
import { dialogStyles } from "./LoginModal.style";
import { CloseBtn } from "@assets/svgs";

interface LoginModalProps {
  title: string;
  context: string;
  onLogin: () => void;
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  title,
  onLogin,
  onCancel,
}) => {
  return (
    <div css={dialogStyles.container}>
      <div css={dialogStyles.header}>
        {title}
        <CloseBtn onClick={onCancel} />
      </div>
      <div css={dialogStyles.body}>
        <Kakao css={dialogStyles.kakaoIcon} onClick={onLogin} />
      </div>
      <div css={dialogStyles.footer}>
        로그인 시,{" "}
        <a href="#" css={dialogStyles.termsLink}>
          서비스 이용약관
        </a>
        에 동의하는 것으로 간주됩니다.
      </div>
    </div>
  );
};

export default LoginModal;
