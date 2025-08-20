import { useEffect, useRef } from "react";
import useGetSignIn from "apis/hooks/users/useGetSignIn";
import { LoadingSpinnerIcon } from "@assets/svgs";
import { container, iconStyle } from "./Callback.style";
import { useParams } from "react-router-dom";

const Callback: React.FC = () => {
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

  return (
    <main css={container}>
      <LoadingSpinnerIcon css={iconStyle} />
    </main>
  );
};

export default Callback;
