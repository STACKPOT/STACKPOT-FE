import { GoogleIcon, KaKaoTalkIcon, NaverIcon } from "@assets/svgs";
import {
  background,
  buttonStyle,
  closeIconStyle,
  container,
  googleButtonStyle,
  kakaoButtonStyle,
  loginButtonContainer,
  naverButtonStyle,
  textHighlightStyle,
  textStyle,
  titleContentContainer,
  titleStyle,
} from "./LoginModal.style";
import { CloseIcon } from "@assets/svgs";

interface LoginModalProps {
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onCancel }) => {
  const googleLoginLink = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    import.meta.env.VITE_REST_GOOGLE_API_KEY
  }&redirect_uri=${
    import.meta.env.VITE_GOOGLE_REDIRECT_URI
  }&response_type=code&scope=email`;

  const kakaoLoginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code
&scope=account_email
&prompt=login`;

  const naverLoginLink = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_NAVER_API_KEY
  }&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}`;

  const handleLogin = (link: string) => {
    window.location.href = link;
  };

  return (
    <div css={background}>
      <div css={container}>
        <CloseIcon css={closeIconStyle} onClick={onCancel} type="button" />
        <div css={titleContentContainer}>
          <p css={titleStyle}>STACKPOT에 오신 것을 환영합니다!</p>
          <p css={textStyle}>로그인하고 프로젝트를 진행해 보세요.</p>
          <div css={loginButtonContainer}>
            <button
              css={[buttonStyle, googleButtonStyle]}
              onClick={() => handleLogin(googleLoginLink)}
            >
              <GoogleIcon />
              Google 로그인
            </button>
            <button
              css={[buttonStyle, kakaoButtonStyle]}
              onClick={() => handleLogin(kakaoLoginLink)}
            >
              <KaKaoTalkIcon />
              카카오 로그인
            </button>
            <button
              css={[buttonStyle, naverButtonStyle]}
              onClick={() => handleLogin(naverLoginLink)}
            >
              <NaverIcon />
              네이버 로그인
            </button>
          </div>
          <p css={textStyle}>
            로그인 시,{" "}
            <a href="#" css={textHighlightStyle}>
              서비스 이용약관
            </a>
            에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
