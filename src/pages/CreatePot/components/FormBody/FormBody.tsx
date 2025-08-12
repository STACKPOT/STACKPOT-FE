import { forwardRef } from "react";
import {
  buttonContainer,
  dateContainerStyle,
  dividerStyle,
  formContainer,
  inputStyle,
  labelStyle,
  potDateStyle,
  roleButtonContainer,
  roleLabelStyle,
  textareaStyle,
  tildeStyle,
} from "./FormBody.style";
import { useFormContext } from "react-hook-form";
import { participation, participationMap, partKoreanNameMap, period } from "@constants/categories";
import { CategoryButton, DatePickerButton } from "@components/index";
import DatePicker from "../DatePicker/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { PotFormData } from "../PotForm";
import { Role } from "types/role";
import CharacterCheckBox from "@components/commons/CharacterCheckbox/CharacterCheckbox";
import { roleImages } from "@constants/roleImage";


// 재사용 가능성 있을지 모르겠음
const visibleRoles = Object.entries(roleImages)
  .filter(([role]) => role !== "UNKNOWN")
  .sort(([a], [b]) => {
    const aKor = partKoreanNameMap[a];
    const bKor = partKoreanNameMap[b];
    return aKor.localeCompare(bKor);
  });

const FormBody = forwardRef<HTMLDivElement>(
  ({ }, ref) => {
    const {
      register,
      watch,
      setValue,
    } = useFormContext<PotFormData>();

    const [potModeOfOperation, potStartDate, potEndDate, potRecruitmentDeadline, recruitingMembers, potRole] =
      watch([
        "potModeOfOperation",
        "potStartDate",
        "potEndDate",
        "potRecruitmentDeadline",
        "recruitingMembers",
        "potRole"
      ]);

    const handleStartDate = (day: Dayjs | null) => {
      if (day) {
        setValue("potStartDate", day.format("YYYY-MM-DD"));
      }
    };
    const handleEndDate = (day: Dayjs | null) => {
      if (day) {
        setValue("potEndDate", day.format("YYYY-MM-DD"));
      }
    };

    const handleDeadline = (day: Dayjs | null) => {
      if (day) {
        setValue("potRecruitmentDeadline", day.format("YYYY-MM-DD"));
      }
    };

    const handleRecruitmentChange = (category: Role, value: string) => {
      const newRecruiting = {
        ...recruitingMembers,
        [category]: Number(value),
      };

      setValue("recruitingMembers", newRecruiting);

      const recruitmentDetails = Object.entries(newRecruiting).map(([role, count]) => ({
        recruitmentRole: role as Role,
        recruitmentCount: count,
      }));

      setValue("recruitmentDetails", recruitmentDetails);
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
        <div css={roleLabelStyle}>
          <div>나의 역할</div>
          <div css={roleButtonContainer}>
            {visibleRoles.map(([category, image]) => (
              <CharacterCheckBox
                key={category}
                category={category as Role}
                image={image}
                checked={potRole === category}
                onClick={() => setValue("potRole", category as Role)}
              />
            ))}
          </div>
        </div>
        <div css={dividerStyle} />
        <div css={dateContainerStyle}>
          <div css={labelStyle}>
            모집 마감
            <DatePickerButton
              date={dayjs(potRecruitmentDeadline)}
              onChange={handleDeadline}
            />
          </div>
          <div css={potDateStyle}>
            <div css={labelStyle}>
              예상 기간
              <DatePicker
                date={dayjs(potStartDate)}
                onChange={handleStartDate}
              />
            </div>
            <div css={tildeStyle}>
              ~
            </div>
            <div css={labelStyle}>
              <DatePicker
                date={dayjs(potEndDate)}
                onChange={handleEndDate}
              />
            </div>
          </div>
        </div>
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
        {/* <div css={labelStyle}>
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
        </div> */}
        <div css={roleLabelStyle}>
          <div> 모집 파트</div>
          <div css={roleButtonContainer}>
            {visibleRoles.map(([category, image]) => (
              <CharacterCheckBox
                key={category}
                category={category as Role}
                image={image}
                initialRecruitment={recruitingMembers}
                option={true}
                checked={false}
                onCountChange={(e) => handleRecruitmentChange(category as Role, e.target.value)}
              />
            ))}
          </div>
        </div>
        <label css={labelStyle}>
          사용 언어
          <input
            css={inputStyle}
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
      </div >
    )
  }
)
export default FormBody;