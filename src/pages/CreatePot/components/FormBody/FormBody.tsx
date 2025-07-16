import { forwardRef } from "react";
import {
  buttonContainer,
  dateContainerStyle,
  dateInputStyle,
  dividerStyle,
  formContainer,
  inputStyle,
  labelStyle,
  languageInputStyle,
  potDateStyle,
  roleButtonContainer,
  roleLabelStyle,
  textareaStyle,
  tildeStyle,
} from "./FormBody.style";
import { useFormContext } from "react-hook-form";
import { participation, participationMap, partMap, period } from "@constants/categories";
import { CategoryButton } from "@components/index";
import DatePicker from "../DatePicker/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { PotFormData } from "../PotForm";
import { Role } from "types/role";
import broccoli from "@assets/images/characters/broccoli.webp";
import carrot from "@assets/images/characters/carrot.webp";
import mushroom from "@assets/images/characters/mushroom.webp";
import onion from "@assets/images/characters/onion.webp";
import CharacterCheckBox from "@components/commons/CharacterCheckbox/CharacterCheckbox";

const characterOptions = [
  { category: "기획", image: carrot },
  { category: "디자인", image: broccoli },
  { category: "백엔드", image: onion },
  { category: "프론트엔드", image: mushroom },
];


const FormBody = forwardRef<HTMLDivElement>(
  ({ }, ref) => {
    const {
      register,
      watch,
      setValue,
    } = useFormContext<PotFormData>();

    const [potModeOfOperation, potDuration, potStartDate, potEndDate, recruitmentDeadline, recruitingMembers, myRole] =
      watch([
        "potModeOfOperation",
        "potDuration",
        "potStartDate",
        "potEndDate",
        "recruitmentDeadline",
        "recruitingMembers",
        "myRole"
      ]);
    // const handleStartDate = (day: Dayjs | null) => {
    //   if (day) {
    //     setValue("potStartDate", day.format("YYYY-MM-DD"));
    //   }
    // };
    // const handleEndDate = (day: Dayjs | null) => {
    //   if (day) {
    //     setValue("potEndDate", day.format("YYYY-MM-DD"));
    //   }
    // };

    const handleDeadline = (day: Dayjs | null) => {
      if (day) {
        setValue("recruitmentDeadline", day.format("YYYY-MM-DD"));
      }
    };
    // const p
    // setValue("potDuration", period[0]);

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
            {characterOptions.map(({ category, image }) => (
              <CharacterCheckBox
                key={category}
                category={category}
                image={image}
                checked={myRole === category}
                onClick={() => setValue("myRole", category as Role)}
              />
            ))}
          </div>
        </div>
        <div css={dividerStyle} />
        <div css={dateContainerStyle}>
          {/* <div css={labelStyle}>
            
            <div css={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 600 }}>
              <CalendarIcon />
              <span>날짜 선택하기</span>
            </div>
          </div> */}
          <div css={labelStyle}>
            모집 마감
            <DatePicker
              date={dayjs(recruitmentDeadline)}
              onChange={handleDeadline}
            />
          </div>
          <div css={potDateStyle}>
            <div css={labelStyle}>
              예상 기간
              <input
                css={dateInputStyle}
                type="text"
                placeholder="YYYY-MM-DD"
                value={potStartDate}
                onChange={(e) => setValue("potStartDate", e.target.value)}
              />
            </div>
            <div css={tildeStyle}>
              ~
            </div>
            <div css={labelStyle}>
              <input
                css={dateInputStyle}
                type="text"
                placeholder="YYYY-MM-DD"
                value={potEndDate}
                onChange={(e) => setValue("potEndDate", e.target.value)}
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
        <div css={roleLabelStyle}>
          <div> 모집 파트</div>
          <div css={roleButtonContainer}>
            {characterOptions.map(({ category, image }) => (
              <CharacterCheckBox
                key={category}
                category={category}
                image={image}
                // checked={watch("myRole") === category}
                initialRecruitment={recruitingMembers}
                option={true}
                checked={false}
                onCountChange={(e) => {
                  const newRecruiting = {
                    ...recruitingMembers,
                    [partMap[category]]: Number(e.target.value),
                  };
                  setValue("recruitingMembers", newRecruiting);

                  const recruitmentDetails = Object.entries(newRecruiting).map(([role, count]) => ({
                    recruitmentRole: role as Role,
                    recruitmentCount: count,
                  }));
                  setValue("recruitmentDetails", recruitmentDetails);
                }} />
            ))}
          </div>
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
      </div >
    )
  }
)
export default FormBody;