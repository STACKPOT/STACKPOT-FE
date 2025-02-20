import { forwardRef } from "react";
import {
  buttonContainer,
  dividerStyle,
  formContainer,
  inputStyle,
  labelStyle,
  languageInputStyle,
  partStyle,
  textareaStyle,
} from "./FormBody.style";
import { useFormContext } from "react-hook-form";
import { participation, participationMap, period } from "@constants/categories";
import { CategoryButton, PartRecruitment } from "@components/index";
import DatePicker from "../DatePicker/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { PotFormData } from "../PotForm";

const FormBody = forwardRef<HTMLDivElement>(
  ({ }, ref) => {
    const {
      register,
      watch,
      setValue,
    } = useFormContext<PotFormData>();

    const [potModeOfOperation, potDuration, potStartDate, recruitmentDeadline, recruitingMembers] =
      watch([
        "potModeOfOperation",
        "potDuration",
        "potStartDate",
        "recruitmentDeadline",
        "recruitingMembers"
      ]);

    const handleStartDate = (day: Dayjs | null) => {
      if (day) {
        setValue("potStartDate", day.format("YYYY-MM-DD"));
      }
    };
    const handleDeadline = (day: Dayjs | null) => {
      if (day) {
        setValue("recruitmentDeadline", day.format("YYYY-MM-DD"));
      }
    };

    return (
      <div ref={ref} css={formContainer}>
        <label css={labelStyle}>
          팟 네임
          <input
            css={inputStyle}
            placeholder="메인 제목 작성"
            {...register("potName", { required: true })}
            maxLength={255}
          />
        </label>
        <div css={dividerStyle} />
        <div css={labelStyle}>
          진행 방식
          <div css={buttonContainer}>
            {participation.map((participation) => (
              <CategoryButton
                key={participation}
                style="pot"
                selected={
                  potModeOfOperation ===
                  participationMap[participation]
                }
                onClick={() =>
                  setValue(
                    "potModeOfOperation",
                    participationMap[participation]
                  )
                }
              >
                {participation}
              </CategoryButton>
            ))}
          </div>
        </div>
        <div css={labelStyle}>
          팟 시작일
          <DatePicker date={dayjs(potStartDate)} onChange={handleStartDate} />
        </div>
        <div css={labelStyle}>
          모집 마감
          <DatePicker
            date={dayjs(recruitmentDeadline)}
            onChange={handleDeadline}
          />
        </div>
        <div css={labelStyle}>
          예상 기간
          <div css={buttonContainer}>
            {period.map((period) => (
              <CategoryButton
                key={period}
                style="pot"
                selected={potDuration === period}
                onClick={() => setValue("potDuration", period)}
              >
                {period}
              </CategoryButton>
            ))}
          </div>
        </div>
        <div css={partStyle}>
          모집 파트
          <PartRecruitment
            initialRecruitment={recruitingMembers}
            onChange={(recruitment) =>
              setValue("recruitmentDetails", recruitment)
            }
          />
        </div>
        <label css={labelStyle}>
          사용 언어
          <input
            css={[inputStyle, languageInputStyle]}
            placeholder="사용 언어 작성"
            {...register("potLan", { required: true })}
            maxLength={255}
          />
        </label>
        <textarea
          css={textareaStyle}
          placeholder="나만의 팟을 만들어 볼까요?"
          {...register("potContent", { required: true })}
        />
      </div>
    )
  }
)
export default FormBody;