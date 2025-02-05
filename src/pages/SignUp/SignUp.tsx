import {
  bodyContainer,
  container,
  dividerStyle,
  headerContainer,
  headerStyle,
  mainContainer,
  categoryContainer,
  buttonStyle,
  inputStyle,
} from "./SignUp.style";
import { Button } from "@components/index";
import { CategorySelection, ContractsSection, Section } from "./components";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import usePatchSignIn from "apis/hooks/users/usePatchSignIn";

type SignInFormData = {
  kakaoId: string;
  role: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN" | undefined;
  interest: string;
};

const SignUp = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      kakaoId: "",
      role: undefined,
      interest: "",
      contractsAgreed: false,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods;
  const { mutate } = usePatchSignIn();

  const [role, interest, kakaoId, contractsAgreed] = watch([
    "role",
    "interest",
    "kakaoId",
    "contractsAgreed",
  ]);

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(kakaoId, role, interest);
    mutate(data);
  };

  return (
    <main css={container}>
      <FormProvider {...methods}>
        <form css={mainContainer} onSubmit={handleSubmit(onSubmit)}>
          <div css={headerContainer}>
            <h1 css={headerStyle}>회원가입</h1>
            <div css={dividerStyle} />
          </div>
          <div css={bodyContainer}>
            <Section
              title="카테고리 설정"
              description="STACKPOT에 가입하기 위해 카테고리를 설정해 주세요!"
            />
            <div css={categoryContainer}>
              <CategorySelection type="role" title="역할" />
              <CategorySelection type="interest" title="관심사" />
            </div>
            <Section
              title="카카오톡 아이디"
              description={`팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.
                카카오톡 아이디를 작성해 주세요.`}
            />
            <input
              css={inputStyle}
              placeholder="카카오톡 아이디 작성"
              {...register("kakaoId", { required: true })}
            />
            <ContractsSection />
          </div>
          <Button
            type="submit"
            variant="action"
            actionType="join"
            css={buttonStyle}
            disabled={!isValid || !contractsAgreed}
          >
            가입하기
          </Button>
        </form>
      </FormProvider>
    </main>
  );
};

export default SignUp;
