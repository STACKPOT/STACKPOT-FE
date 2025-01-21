import { PotIcon } from "@assets/svgs";
import {
  buttonContainer,
  datePickerCalendarStyle,
  datePickerStyle,
  dividerStyle,
  formContainer,
  headContainer,
  iconStyle,
  inputStyle,
  labelStyle,
  languageInputStyle,
  mainContainer,
  StyledPickersLayout,
  textareaStyle,
  titleContainer,
  titleStyle,
} from "./CreatePot.style";
import { Button, CategoryButton, TextField } from "@components/index";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const CreatePot = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const participation = ["온라인", "오프라인", "혼합"];
  const period = ["단기-1개월", "단기-2개월", "단기-3개월", "단기-6개월 이상"];

  const partMap: { [key: string]: "FE" | "BE" | "PM" | "DE" } = {
    프론트엔드: "FE",
    백엔드: "BE",
    디자인: "DE",
    기획: "PM",
  };

  const handleButtonClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main css={mainContainer}>
      <div css={headContainer}>
        <div css={titleContainer}>
          <h2 css={titleStyle}>나의 팟 만들기</h2>
          <PotIcon css={iconStyle} />
        </div>
        <Button style="action">게시물 업로드</Button>
      </div>
      <form css={formContainer}>
        <label css={labelStyle}>
          팟 네임
          <input css={inputStyle} placeholder="메인 제목 작성" />
        </label>
        <div css={dividerStyle} />
        <div css={labelStyle}>
          진행 방식
          <div css={buttonContainer}>
            {participation.map((participation) => (
              <CategoryButton
                key={participation}
                style="pot"
                selected={selectedCategory === participation}
                onClick={handleButtonClick}
              >
                {participation}
              </CategoryButton>
            ))}
          </div>
        </div>

        <div css={labelStyle}>
          시작 날짜
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              css={[datePickerCalendarStyle, datePickerStyle]}
              slots={{
                layout: StyledPickersLayout,
              }}
            />
          </LocalizationProvider>
        </div>
        <div css={labelStyle}>
          예상 기간
          <div css={buttonContainer}>
            {period.map((period) => (
              <CategoryButton
                key={period}
                style="pot"
                selected={selectedCategory === period}
                onClick={handleButtonClick}
              >
                {period}
              </CategoryButton>
            ))}
          </div>
        </div>
        <div css={labelStyle}>
          모집 파트
          <div css={buttonContainer}>
            {Object.keys(partMap).map((partName) => (
              <CategoryButton
                key={partName}
                style={partMap[partName]}
                selected={selectedCategory === partMap[partName]}
                onClick={() => handleButtonClick(partMap[partName])}
              >
                {partName}
              </CategoryButton>
            ))}
          </div>
        </div>
        <label css={labelStyle}>
          사용 언어
          <input
            css={[inputStyle, languageInputStyle]}
            placeholder="사용 언어 작성"
          />
        </label>
        <textarea
          css={textareaStyle}
          placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
        />
      </form>
    </main>
  );
};

export default CreatePot;
