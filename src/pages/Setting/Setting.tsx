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
} from "./Setting.style";
import { PotIcon } from "@assets/svgs";
import { CategoryButton, TextField } from "@components/index";
import { useState } from "react";
import { SaveButton } from "./components";

const Setting = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [kakaoId, setKakaoId] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");

  const categories = ["프론트엔드", "백엔드", "디자인", "기획"];

  const interests = [
    "사이드 프로젝트",
    "1인 개발",
    "공모전",
    "창업",
    "네트워킹 행사",
  ];

  const handleInterestClick = (interestName: string) => {
    setSelectedInterest((prev) =>
      prev.includes(interestName)
        ? prev.filter((item) => item !== interestName)
        : [...prev, interestName]
    );
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  function handleClick(): void {}

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIntroduction(e.target.value);
  };

  return (
    <main>
      <div css={container}>
        <div css={titleContent}>
          <div css={title}>
            <p>개인정보 수정</p>
            <PotIcon css={iconStyle} />
          </div>
          <div css={describe}>계정 정보를 확인하고 수정할 수 있어요.</div>
        </div>
        <div css={detailContainer}>
          <div css={content(false)}>
            <div css={contentHeader}>메인 역할</div>
            <div css={contentBody}>
              역할은 하나만 선택해 주세요. 변경 시 닉네임도 바뀌게 됩니다.
            </div>
            <div css={categoryContainer}>
              {categories.map((categoryName) => (
                <div key={categoryName} css={categories}>
                  <CategoryButton
                    style="pot"
                    selected={selectedCategory === categoryName}
                    onClick={() => handleCategoryClick(categoryName)}
                  >
                    {categoryName}
                  </CategoryButton>
                </div>
              ))}
            </div>
          </div>
          <div css={content(false)}>
            <div css={contentHeader}>관심사</div>
            <div css={contentBody}>
              <p>관심사는 여러 개 선택할 수 있어요.</p>
            </div>
            <div css={categoryContainer}>
              {interests.map((interestName) => (
                <div key={interestName} css={categories}>
                  <CategoryButton
                    style="pot"
                    selected={selectedInterest.includes(interestName)}
                    onClick={() => handleInterestClick(interestName)}
                  >
                    {interestName}
                  </CategoryButton>
                </div>
              ))}
            </div>
          </div>
          <div css={content(true)}>
            <div css={contentHeader}>카카오 아이디 수정</div>
            <div css={textStyle}>
              <TextField
                placeholder="카카오톡 아이디 작성"
                onTextChange={setKakaoId}
              >
                {kakaoId}
              </TextField>
            </div>
          </div>
          <div css={content(true)}>
            <div css={contentHeader}>한줄 소개 수정</div>
            <div css={textareaWrapper}>
              <textarea
                maxLength={50}
                css={textareaStyle(introduction.length > 50)}
                placeholder="소개 작성"
                value={introduction}
                onChange={handleIntroductionChange}
              />
              <span css={charCountStyle(introduction.length > 50)}>
                {introduction.length}/50
              </span>
            </div>
          </div>
          <div css={content(false)}>
            <div css={contentHeader}>
              <p>계정 탈퇴하기</p>
              <CategoryButton
                style="PM"
                selected={selectedCategory === "participation"}
                onClick={handleClick}
              >
                탈퇴하기
              </CategoryButton>
            </div>
            <div css={contentBody}>
              <p>그동안 올린 글과 정보가 모두 삭제됩니다.</p>
            </div>
          </div>
        </div>
        <div css={buttonContainer}>
          <SaveButton onClick={handleClick}>저장하기</SaveButton>
        </div>
      </div>
    </main>
  );
};

export default Setting;
