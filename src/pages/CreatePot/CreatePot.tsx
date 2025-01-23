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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { participation, partMap, period } from "@constants/categories";
import { DatePicker } from "./components";

const CreatePot = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedParts, setSelectedParts] = useState<string[]>([]);

  const [visibleInputs, setVisibleInputs] = useState<{
    [key: string]: boolean;
  }>({});

  const handleButtonClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePartClick = (partName: string) => {
    setSelectedParts((prev) =>
      prev.includes(partName)
        ? prev.filter((item) => item !== partName)
        : [...prev, partName]
    );
    setVisibleInputs((prev) => ({
      ...prev,
      [partName]: !prev[partName],
    }));
  };

  const handleUploading = () => {
    // navigate("/");
  };

  return (
    <main css={mainContainer}>
      <div css={headContainer}>
        <div css={titleContainer}>
          <h2 css={titleStyle}>나의 팟 만들기</h2>
          <PotIcon css={iconStyle} />
        </div>
        <Button style="action" onClick={handleUploading}>
          게시물 업로드
        </Button>
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
          <DatePicker />
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
        <div css={partStyle}>
          모집 파트
          <div css={partContainer}>
            {Object.keys(partMap).map((partName) => (
              <div key={partName} css={partButtonContainer}>
                <CategoryButton
                  style={partMap[partName]}
                  selected={selectedParts.includes(partName)}
                  onClick={() => handlePartClick(partName)}
                >
                  {partName}
                </CategoryButton>
                <div css={inputContainer(visibleInputs[partName])}>
                  <input css={countInputStyle} />
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
