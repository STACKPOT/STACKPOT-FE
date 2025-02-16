import {
  container,
  content,
  contentHeader,
  iconStyle,
  contentBody,
  textStyle,
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
import { PotIcon } from "@assets/svgs";
import { Button, ExplainModal, PotButton, TextField } from "@components/index";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import usePatchUserProfileUpdate from "apis/hooks/users/usePatchUserProfileUpdate";
import { PatchUserProfileUpdateParams } from "apis/types/user";
import useGetMyProfile from "apis/hooks/users/useGetMyProfile";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { CategorySelection } from "./components";
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
      kakaoId: "",
    },
  });

  const { register, handleSubmit, watch, setValue } = methods;

  const [introduction, kakaoId] = watch(["userIntroduction", "kakaoId"]);

  useEffect(() => {
    if (profile) {
      setValue("role", profile?.role);
      setValue("interest", profile?.interest);
      setValue("kakaoId", profile?.kakaoId);
      setValue("userIntroduction", profile?.userIntroduction);
    }
  }, [profile]);

  const onSubmit: SubmitHandler<PatchUserProfileUpdateParams> = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(routes.myPage);
      },
    });
  };

  const { mutate: deleteUser } = useDeleteUser();

  const handleClick = () => {
    const token = localStorage.getItem("refreshToken");
    if (token) {
      deleteUser(token);
    }
  };

  return (
    <main>
      <FormProvider {...methods}>
        <form css={container} onSubmit={handleSubmit(onSubmit)}>
          <div css={titleContent}>
            <div css={title}>
              <p>개인정보 수정</p>
              <PotIcon css={iconStyle} />
            </div>
            <p css={describe}>계정 정보를 확인하고 수정할 수 있어요.</p>
          </div>
          <div css={detailContainer}>
            <CategorySelection type="role" profile={profile} />
            <CategorySelection type="interest" />
            <div css={content(true)}>
              <p css={contentHeader}>카카오 아이디 수정</p>
              <div css={textStyle}>
                <TextField
                  placeholder="카카오톡 아이디 작성"
                  onTextChange={(text) => setValue("kakaoId", text)}
                >
                  {kakaoId}
                </TextField>
              </div>
            </div>
            <div css={content(true)}>
              <p css={contentHeader}>한줄 소개 수정</p>
              <div css={textareaWrapper}>
                <textarea
                  maxLength={50}
                  css={textareaStyle(introduction.length > 50)}
                  placeholder="소개 작성"
                  {...register("userIntroduction")}
                />
                <span css={charCountStyle(introduction.length > 50)}>
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
              <p css={contentBody}>그동안 올린 글과 정보가 모두 삭제됩니다.</p>
            </div>
          </div>
          <div css={buttonContainer}>
            <Button type="submit" css={buttonStyle} variant={"landing"}>
              저장하기
            </Button>
          </div>
        </form>
      </FormProvider>

      {isWithdrawModalOpen && (
        <ExplainModal
          type="delete"
          title="탈퇴하시겠습니까?"
          buttonText="탈퇴하기"
          subtitle={`탈퇴 후 30일 이내에는 계정을 복구할 수 있습니다.\n이후에는 모든 데이터가 영구적으로 삭제됩니다`}
          onButtonClick={handleClick}
          onCancel={() => setIsWithdrawModalOpen(false)}
        >
          <></>
        </ExplainModal>
      )}
    </main>
  );
};

export default Setting;
