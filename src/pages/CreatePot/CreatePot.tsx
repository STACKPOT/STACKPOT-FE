import { PotIcon } from "@assets/svgs";
import {
  buttonContainer,
  countInputStyle,
  dividerStyle,
  formContainer,
  headContainer,
  iconStyle,
  inputContainer,
  inputStyle,
  labelStyle,
  languageInputStyle,
  mainContainer,
  partButtonContainer,
  partContainer,
  partStyle,
  textareaStyle,
  titleContainer,
  titleStyle,
} from "./CreatePot.style";
import { Button, CategoryButton } from "@components/index";
import { participation, participationMap, partMap, period } from "@constants/categories";
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
  partNumber: { [key: string]: number };
  visibleInputs: { [key: string]: boolean };
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
      partNumber: Object.fromEntries(Object.keys(partMap).map(key => [key, 0])),
      visibleInputs: Object.fromEntries(Object.keys(partMap).map(key => [key, false])),
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { isValid }
  } = methods;

  const [potDuration, potModeOfOperation, potStartDate, recruitmentDeadline, partNumber, visibleInputs] = watch([
    "potDuration",
    "potModeOfOperation",
    "potStartDate",
    "recruitmentDeadline",
    "partNumber",
    "visibleInputs",])

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

  const handlePartClick = (partName: string) => {
    setValue("visibleInputs", {
      ...getValues("visibleInputs"),
      [partName]: visibleInputs[partName] ? false : true
    })
  };
  const handlePartNumber = (partName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("partNumber", {
      ...getValues("partNumber"),
      [partName]: Number(e.target.value)
    })
  };

  const onSubmit: SubmitHandler<CreatePotFormData> = (data: CreatePotFormData) => {
    if (potDuration && potModeOfOperation && potStartDate && recruitmentDeadline) {
      let recruits: RecruitmentDetail[] = [];
      Object.entries(partNumber).forEach((part) => {
        if (visibleInputs[part[0]] && part[1] > 0) {
          recruits = [
            ...recruits,
            { recruitmentRole: partMap[part[0]], recruitmentCount: part[1] }]
        }
      })

      mutate({
        ...data,
        recruitmentDetails: recruits,
      })
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
              <div css={partContainer}>
                {Object.keys(partMap).map((partName) => (
                  <div key={partName} css={partButtonContainer}>
                    <CategoryButton
                      style={partMap[partName]}
                      selected={visibleInputs[partName]}
                      onClick={() => handlePartClick(partName)}
                    >
                      {partName}
                    </CategoryButton>
                    <div css={inputContainer(visibleInputs[partName])}>
                      <input css={countInputStyle}
                        type="number"
                        onChange={(e) => handlePartNumber(partName, e)} />
                      <p>명</p>
                    </div>
                  </div>
                ))}
              </div>
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
