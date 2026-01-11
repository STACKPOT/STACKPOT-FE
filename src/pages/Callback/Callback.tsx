import { useEffect, useRef } from "react";
import useGetSignIn from "apis/hooks/users/useGetSignIn";
import { LoadingSpinnerIcon } from "@assets/svgs";
import { container, iconStyle } from "./Callback.style";
import { useNavigate, useParams } from "react-router-dom";
import routes from "@constants/routes";

const Callback: React.FC = () => {
  const navigate = useNavigate();
  const { loginType } = useParams();
  const isCodeProcessed = useRef(false);
  const code = new URL(window.location.href).searchParams.get("code");
  const { mutate } = useGetSignIn(loginType);

  useEffect(() => {
    if (code && !isCodeProcessed.current) {
      mutate(code);
      isCodeProcessed.current = true;
    }
  }, [code, mutate]);

  useEffect(() => {
    if (!loginType || !["google", "kakao", "naver"].includes(loginType)) {
      console.error("Invalid loginType:", loginType);
      navigate(routes.home);
    }
  }, [loginType]);

  return (
    <main css={container}>
      <LoadingSpinnerIcon css={iconStyle} />
    </main>
  );
};

export default Callback;
