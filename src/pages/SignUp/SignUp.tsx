import {
  bodyContainer,
  container,
  dividerStyle,
  headerContainer,
  headerStyle,
  mainContainer,
  categoryContainer,
  buttonStyle,
} from "./SignUp.style";
import { Button, Modal } from "@components/index";
import {
  CategorySelection,
  ContractsSection,
  ProfileModal,
  Section,
} from "./components";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import usePatchSignIn from "apis/hooks/users/usePatchSignIn";
import { useState } from "react";
import { SignInResponse } from "apis/types/user";
import { Role } from "types/role";
import { useBlocker } from "react-router-dom";

type SignInFormData = {
  role: Role;
  interest: string[];
};

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseData, setResponseData] = useState<SignInResponse | null>(null);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      role: "UNKNOWN" as Role,
      interest: [],
      contractsAgreed: false,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isDirty },
  } = methods;

  const { mutate } = usePatchSignIn();

  const [role, interest, contractsAgreed] = watch([
    "role",
    "interest",
    "contractsAgreed",
  ]);

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (response) => {
        setResponseData(response.result ?? null);
        setIsModalOpen(true);
      },
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return isDirty && currentLocation.pathname !== nextLocation.pathname;
  });

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
            <ContractsSection />
          </div>
          <Button
            type="submit"
            variant="full"
            css={buttonStyle}
            disabled={!isValid || !contractsAgreed}
          >
            가입하기
          </Button>
        </form>
      </FormProvider>
      {isModalOpen && responseData?.role && (
        <ProfileModal onModalCancel={handleCancel} role={responseData?.role} />
      )}
      {blocker.state === "blocked" && (
        <Modal
          title="페이지를 나가시겠어요?"
          message="입력한 내용을 처음부터 시작해야 해요."
          confirmButton="나가기"
          cancelButton="취소"
          onConfirm={blocker.proceed}
          onCancel={blocker.reset}
        />
      )}
    </main>
  );
};

export default SignUp;
