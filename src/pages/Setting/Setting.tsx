import {
  container,
  content,
  contentHeader,
  iconStyle,
  contentBody,
  categoryContainer,
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
  categories,
} from "./Setting.style";
import { PotIcon } from "@assets/svgs";
import { Button, CategoryButton, ExplainModal, Modal, PotButton, TextField } from "@components/index";
import { useEffect, useState } from "react";
import { interests, partMap } from "@constants/categories";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import usePatchUserProfileUpdate from "apis/hooks/users/usePatchUserProfileUpdate";
import { PatchUserProfileUpdateParams } from "apis/types/user";
import { Role } from "types/role";
import useGetMyProfile from "apis/hooks/users/useGetMyProfile";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const Setting = () => {
  const navigate = useNavigate();
  const { mutate } = usePatchUserProfileUpdate();
  const { data: profile } = useGetMyProfile();
  const [pendingCategory, setPendingCategory] = useState<Role | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const methods = useForm<PatchUserProfileUpdateParams>({
    mode: "onChange",
    defaultValues: {
      role: undefined,
      interest: "",
      userIntroduction: "",
      kakaoId: "",
    },
  })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = methods;

  const [
    selectedRole,
    selectedInterest,
    introduction,
    kakaoId
  ] = watch(["role", "interest", "userIntroduction", "kakaoId"]);

  useEffect(() => {
    if (profile) {
      setValue("role", profile?.role);
      setValue("interest", profile?.interest);
      setValue("kakaoId", profile?.kakaoId);
      setValue("userIntroduction", profile?.userIntroduction);
    }
  }, [profile])

  const handleSelectRole = (role: Role) => {
    if (selectedRole && selectedRole !== role) {
      setPendingCategory(role);
      setIsModalOpen(true);
    }
  };

  const onSubmit: SubmitHandler<PatchUserProfileUpdateParams> = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(routes.myPage);
      }
    });
  }

  const handleConfirmRole = () => {
    if (pendingCategory) {
      setValue("role", pendingCategory)
      setPendingCategory(null);
    }
    setIsModalOpen(false);
  };

  const handleCloseRoleModal = () => {
    setPendingCategory(null);
    setIsModalOpen(false);
  };

  return (
    <main>
      <FormProvider {...methods} >
        <form css={container} onSubmit={handleSubmit(onSubmit)}>
          <div css={titleContent}>
            <div css={title}>
              <p>개인정보 수정</p>
              <PotIcon css={iconStyle} />
            </div>
            <p css={describe}>계정 정보를 확인하고 수정할 수 있어요.</p>
          </div>
          <div css={detailContainer}>
            <div css={content(false)}>
              <div css={contentHeader}>메인 역할</div>
              <p css={contentBody}>
                역할은 하나만 선택해 주세요. 변경 시 닉네임도 바뀌게 됩니다.
              </p>
              <div css={categoryContainer}>
                {Object.keys(partMap).map((categoryName) => (
                  <div key={categoryName} css={categories}>
                    <CategoryButton
                      style="pot"
                      selected={selectedRole === partMap[categoryName]}
                      onClick={() => handleSelectRole(partMap[categoryName])}
                    >
                      {categoryName}
                    </CategoryButton>
                  </div>
                ))}
              </div>
            </div>
            <div css={content(false)}>
              <div css={contentHeader}>관심사</div>
              <p css={contentBody}>가장 관심있는 분야를 선택해주세요.</p>
              <div css={categoryContainer}>
                {interests.map((interestName) => (
                  <div key={interestName} css={categories}>
                    <CategoryButton
                      style="pot"
                      selected={selectedInterest === interestName}
                      onClick={() => setValue("interest", interestName)}
                    >
                      {interestName}
                    </CategoryButton>
                  </div>
                ))}
              </div>
            </div>
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

      {isModalOpen && (
        <Modal
          title="메인 역할을 변경할까요?"
          message={`메인 역할을 변경할 경우,\n닉네임 또한 [${profile?.nickname}]에서 새로운 닉네임으로 변경됩니다.`}
          onConfirm={handleConfirmRole}
          onCancel={handleCloseRoleModal}
        />
      )}
      {isWithdrawModalOpen && (
        <ExplainModal
          type="delete"
          title="탈퇴하시겠습니까?"
          buttonText="탈퇴하기"
          subtitle={`탈퇴 후 30일 이내에는 계정을 복구할 수 있습니다.\n이후에는 모든 데이터가 영구적으로 삭제됩니다`}
          onButtonClick={() => { }}
          onCancel={() => setIsWithdrawModalOpen(false)}>
          <></>
        </ExplainModal>
      )}
    </main>
  );
};

export default Setting;
