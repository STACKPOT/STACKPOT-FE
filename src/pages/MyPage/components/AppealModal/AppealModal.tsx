import { AppealIcon, BookIcon, CloseIcon, CreateIcon } from "@assets/svgs";
import {
  backgroundStyle,
  bodyContainer,
  bodyTitleContainer,
  bodyTitleStyle,
  buttonStyle,
  closeIconStyle,
  dateContainer,
  dateStyle,
  dividerStyle,
  introductionContentStyle,
  modalStyle,
  textAreaStyle,
  titleContainer,
  titleStyle,
} from "./AppealModal.style";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AppealPotPatch } from "apis/types/pot";
import useGetFinishedModal from "apis/hooks/users/useGetFinishedModal";

interface AppealModalProps {
  potId: number;
  onCancel: () => void;
  onCompleted: (data: AppealPotPatch) => void;
}

const AppealModal: React.FC<AppealModalProps> = ({
  potId,
  onCancel,
  onCompleted,
}: AppealModalProps) => {
  const { data: potData } = useGetFinishedModal(potId);

  const methods = useForm<AppealPotPatch>({
    mode: "onChange",
    defaultValues: {
      appealContent: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = methods;

  useEffect(() => {
    if (potData) {
      setValue("appealContent", potData?.appealContent);
    }
  }, [potData]);

  useEffect(() => {
    // 모달 외부 영역 스크롤 방지
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <FormProvider {...methods}>
      <div css={backgroundStyle}>
        <form onSubmit={handleSubmit(onCompleted)}>
          <div css={modalStyle}>
            <CloseIcon css={closeIconStyle} onClick={onCancel} />
            <div css={bodyContainer}>
              <div css={titleContainer}>
                <AppealIcon />
                <h1
                  css={titleStyle}
                >{`${potData?.potName} ${potData?.userPotRole} 역할`}</h1>
              </div>
              <div css={dateContainer}>
                <p css={dateStyle}>{potData?.potStartDate}</p>
                <p css={dateStyle}>~</p>
                <p css={dateStyle}>{potData?.potEndDate}</p>
              </div>
              <div css={dividerStyle} />
              <div css={bodyTitleContainer}>
                <BookIcon />
                <p css={bodyTitleStyle}>소개</p>
              </div>
              <p css={introductionContentStyle}>{potData?.potSummary}</p>
              <div css={dividerStyle} />
              <div css={bodyTitleContainer}>
                <CreateIcon />
                <p css={bodyTitleStyle}>여기서 저는요</p>
              </div>
              <textarea
                css={textAreaStyle}
                placeholder="팀장이 정리한 팟 소개와 별개로, 여기서는 자신의 기여를 어필할 수 있어요. 내가 한 일을 강조해 보세요!"
                {...register("appealContent", { required: true })}
              />
            </div>
            <button css={buttonStyle} type="submit" disabled={!isValid}>
              저장하기
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
export default AppealModal;
