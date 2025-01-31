import {
  container,
  content,
  contentHeader,
  iconStyle,
  profileStyle,
  contentBody,
  imageStyle,
  contentFooter,
  categoryContainer,
  textStyle,
  textareaStyle,
  buttonContainer,
} from "./Setting.style";
import { PotIcon } from "@assets/svgs";
import { MushRoomProfile } from "@assets/images";
import { Button, CategoryButton, MyFeedDropdown } from "@components/index";
import TemperatureBar from "@components/commons/TemperatureBar/TemperatureBar";
import { useState } from "react";
import { SaveButton } from "./components";

const Setting = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);

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

  const handleLogout = () => {};

  const handleDelete = () => {};

  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main>
      <div css={container}>
        <div css={content(true)}>
          <div css={contentHeader}>
            <p>설정</p>
            <PotIcon css={iconStyle} />
          </div>
          <div css={contentBody}>
            <img css={imageStyle} src={MushRoomProfile} alt="Profile" />
            <div css={profileStyle}>
              <p>너무 착한 버섯</p>
              <MyFeedDropdown
                topMessage={"로그아웃"}
                bottomMessage={"회원탈퇴"}
                onTop={handleLogout}
                onBottom={handleDelete}
              />
            </div>
          </div>
          <div css={contentFooter}>
            <TemperatureBar temperature={55} />
            <p>재밌는 스터디를 좋아하는 3년차 프론트앤드 개발자입니다.</p>
          </div>
        </div>
        <div css={content(false)}>
          <div css={contentHeader}>
            <p>메인 역할</p>
            <PotIcon css={iconStyle} />
          </div>
          <div css={contentBody}>
            <p>역할은 하나만 선택해 주세요. 변경 시 닉네임도 바뀌게 됩니다. </p>
          </div>
          <div css={categoryContainer}>
            <p css={textStyle}>역할</p>
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
          <div css={contentHeader}>
            <p>관심사</p>
            <PotIcon css={iconStyle} />
          </div>
          <div css={contentBody}>
            <p>관심사는 여러 개 선택할 수 있어요.</p>
          </div>
          <div css={categoryContainer}>
            <p css={textStyle}>관심사</p>
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
          <textarea
            css={textareaStyle}
            placeholder="나에 대해 한 줄로 소개해 보세요."
          />
          <div css={buttonContainer}>
            <SaveButton onClick={handleClick}>변경사항 저장하기</SaveButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Setting;
