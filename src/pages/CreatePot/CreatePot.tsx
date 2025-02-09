import { PotIcon } from "@assets/svgs";
import {
  buttonContainer,
  dividerStyle,
  formContainer,
  headContainer,
  iconStyle,
  inputStyle,
  labelStyle,
  languageInputStyle,
  mainContainer,
  partStyle,
  textareaStyle,
  titleContainer,
  titleStyle,
} from "./CreatePot.style";
import { Button, CategoryButton, PartRecruitment } from "@components/index";
import { participation, participationMap, period } from "@constants/categories";
import { DatePicker } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";
import { Dayjs } from "dayjs";
import { RecruitmentDetail } from "apis/types/pot";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Participation } from "types/participation";

interface CreatePotFormData {
  potName: string;
  potLan: string;
  potDuration: string;
  potModeOfOperation: Participation;
  potContent: string;
  potStartDate: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetail[];
}

const CreatePot = () => {
  const { mutate } = useCreatePot();

  const methods = useForm<CreatePotFormData>({
    defaultValues: {
      potName: "",
      potLan: "",
      potDuration: undefined,
      potModeOfOperation: undefined,
      potContent: "",
      potStartDate: undefined,
      recruitmentDeadline: undefined,
      recruitmentDetails: [],
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid }
  } = methods;

  const [potDuration, potModeOfOperation, potStartDate, recruitmentDeadline] = watch([
    "potDuration",
    "potModeOfOperation",
    "potStartDate",
    "recruitmentDeadline",
  ])

  const handleStartDate = (day: Dayjs | null) => {
    if (day) {
      setValue("potStartDate", day.format('YYYY-MM-DD'))
    }
  }
  const handleDeadline = (day: Dayjs | null) => {
    if (day) {
      setValue("recruitmentDeadline", day.format('YYYY-MM-DD'))
    }
  }

  const onSubmit: SubmitHandler<CreatePotFormData> = (data: CreatePotFormData) => {
    if (potDuration && potModeOfOperation && potStartDate && recruitmentDeadline) {
      mutate(data)
    }
  }

  return (
    <main css={mainContainer}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={headContainer}>
            <div css={titleContainer}>
              <h2 css={titleStyle}>나의 팟 만들기</h2>
              <PotIcon css={iconStyle} />
            </div>
            <Button variant="action" type="submit" disabled={!isValid}>
              팟 만들기
            </Button>
          </div>
          <div css={formContainer}>
            <label css={labelStyle}>
              팟 네임
              <input css={inputStyle} placeholder="메인 제목 작성" {...register("potName", { required: true })} />
            </label>
            <div css={dividerStyle} />
            <div css={labelStyle}>
              진행 방식
              <div css={buttonContainer}>
                {participation.map((participation) => (
                  <CategoryButton
                    key={participation}
                    style="pot"
                    selected={watch("potModeOfOperation") === participationMap[participation]}
                    onClick={() => setValue("potModeOfOperation", participationMap[participation])}
                  >
                    {participation}
                  </CategoryButton>
                ))}
              </div>
            </div>
            <div css={labelStyle}>
              시작 날짜
              <DatePicker onChange={handleStartDate} />
            </div>
            <div css={labelStyle}>
              마감 날짜
              <DatePicker onChange={handleDeadline} />
            </div>
            <div css={labelStyle}>
              예상 기간
              <div css={buttonContainer}>
                {period.map((period) => (
                  <CategoryButton
                    key={period}
                    style="pot"
                    selected={watch("potDuration") === period}
                    onClick={() => setValue("potDuration", period)}
                  >
                    {period}
                  </CategoryButton>
                ))}
              </div>
            </div>
            <div css={partStyle}>
              모집 파트
              <PartRecruitment onChange={(recruitment) => setValue("recruitmentDetails", recruitment)} />
            </div>
            <label css={labelStyle}>
              사용 언어
              <input
                css={[inputStyle, languageInputStyle]}
                placeholder="사용 언어 작성"
                {...register("potLan", { required: true })}
              />
            </label>
            <textarea
              css={textareaStyle}
              placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
              {...register("potContent", { required: true })}
            />
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default CreatePot;
