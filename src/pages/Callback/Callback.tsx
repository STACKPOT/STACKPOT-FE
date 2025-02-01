import { useEffect, useRef } from "react";
import useGetSignIn from "apis/hooks/users/useGetSignIn";

const Callback: React.FC = () => {
  const isCodeProcessed = useRef(false);
  const code = new URL(window.location.href).searchParams.get("code");
  const { mutate } = useGetSignIn();

  useEffect(() => {
    if (code && !isCodeProcessed.current) {
      mutate(code);
      isCodeProcessed.current = true;
    }
  }, [code, mutate]);

  return <main />;
};

export default Callback;
