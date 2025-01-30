import React, { useState } from "react";
import {
  container,
  contentTitle,
  content,
  iconStyle,
  contentBody,
  textareaStyle,
  categoryContainer,
  categories,
  buttonContainer,
  inputStyle,
  toastStyle,
} from "./WritePost.style";
import { PotIcon } from "@assets/svgs";
import { partMap } from "@constants/categories";
import { Button, CategoryButton } from "@components/index";
import UploadToast from "@components/commons/Toast/UploadToast";

const WritePost: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const [visibleInputs, setVisibleInputs] = useState<{
    [key: string]: boolean;
  }>({});
  const [showToast, setShowToast] = useState(false);

  const categories = ["프론트엔드", "백엔드", "디자인", "기획"];

  const handleUploading = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const handlePartClick = (partName: string) => {
    setSelectedPart((prev) => (prev === partName ? null : partName));
    setVisibleInputs({ [partName]: true });
  };

  return (
    <main>
      {showToast && (
        <div css={toastStyle}>
          <UploadToast />
        </div>
      )}
      <div css={container}>
        <div css={content}>
          <div css={contentTitle}>
            피드 작성하기
            <PotIcon css={iconStyle} />
            <div css={buttonContainer}>
              <Button style="action" onClick={handleUploading}>
                피드 업로드
              </Button>
            </div>
          </div>

          <div css={contentBody}>
            <input css={inputStyle} placeholder="메인 제목 작성" />
            <textarea
              css={textareaStyle}
              placeholder="나의 열정을 이야기해봐요"
            />
            <div css={categoryContainer}>
              카테고리
              {Object.keys(partMap).map((partName) => (
                <div key={partName} css={categories}>
                  <CategoryButton
                    style={partMap[partName]}
                    selected={selectedPart === partName}
                    onClick={() => handlePartClick(partName)}
                  >
                    {partName}
                  </CategoryButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WritePost;
