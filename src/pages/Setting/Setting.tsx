import {
  container,
  content,
  contentHeader,

  contentBody,
  textareaStyle,
  describe,
  title,
  titleContent,
  textareaWrapper,
  charCountStyle,
  detailContainer,
  buttonContainer,
  buttonStyle,
} from "./Setting.style";
import { Button, ExplainModal, PotButton } from "@components/index";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import usePatchUserProfileUpdate from "apis/hooks/users/usePatchUserProfileUpdate";
import { PatchUserProfileUpdateParams } from "apis/types/user";
import useGetMyProfile from "apis/hooks/users/useGetMyProfile";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { CategorySelection, NicknameUpdate } from "./components";
import useDeleteUser from "apis/hooks/users/useDeleteUser";

const Setting = () => {
  const navigate = useNavigate();
  const { mutate } = usePatchUserProfileUpdate();
  const { data: profile } = useGetMyProfile();

  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const methods = useForm<PatchUserProfileUpdateParams>({
    mode: "onChange",
    defaultValues: {
      role: undefined,
      interest: "",
      userIntroduction: "",
      nickname: "",
    },
  });

  const { register, handleSubmit, watch, setValue } = methods;

  const introduction = watch("userIntroduction");

  useEffect(() => {
    if (profile) {
      setValue("role", profile?.role);
      setValue("interest", profile?.interest);
      setValue("userIntroduction", profile?.userIntroduction);
      setValue("nickname", profile?.nickname);
    }
  }, [profile]);

  const handleSaveClick: SubmitHandler<PatchUserProfileUpdateParams> = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(routes.myPage);
      },
    });
  };

  const { mutate: deleteUser } = useDeleteUser();

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      deleteUser(token);
    }
  };

  return (
    <main>
      <FormProvider {...methods}>
        <form css={container} onSubmit={(e) => e.preventDefault()}>
          <div css={titleContent}>
            <div css={title}>
              <p>개인정보 수정</p>
            </div>
            <p css={describe}>계정 정보를 확인하고 수정할 수 있어요.</p>
          </div>
          <div css={detailContainer}>
            {profile && <NicknameUpdate profile={profile} />}
            <CategorySelection />

            <div css={content(true)}>
              <p css={contentHeader}>한줄소개 수정</p>
              <div css={textareaWrapper}>
                <textarea
                  maxLength={50}
                  css={textareaStyle(introduction.length === 50)}
                  placeholder="소개 작성"
                  {...register("userIntroduction")}
                />
                <span css={charCountStyle(introduction.length === 50)}>
                  {introduction.length}/50
                </span>
              </div>
            </div>
            <div css={content(false)}>
              <div css={contentHeader}>
                <p>계정 탈퇴하기</p>
                <PotButton
                  type="red"
                  onClick={() => setIsWithdrawModalOpen(true)}
                >
                  탈퇴하기
                </PotButton>
              </div>
              <p css={contentBody}>그동안 올린 글과 정보가 모두 삭제돼요.</p>
            </div>
          </div>
          <div css={buttonContainer}>
            <Button
              type="submit"
              css={buttonStyle}
              variant={"landing"}
              onClick={handleSubmit(handleSaveClick)}
            >
              저장하기
            </Button>
          </div>
        </form>
      </FormProvider>

      {isWithdrawModalOpen && (
        <ExplainModal
          type="delete"
          title="정말로 탈퇴하시겠습니까?"
          buttonText="탈퇴하기"
          subtitle={`탈퇴 후 30일 이내에는 계정을 복구할 수 있습니다.\n이후에는 모든 데이터가 영구적으로 삭제됩니다`}
          onButtonClick={handleClick}
          onCancel={() => setIsWithdrawModalOpen(false)} />
      )}
    </main>
  );
};

export default Setting;
