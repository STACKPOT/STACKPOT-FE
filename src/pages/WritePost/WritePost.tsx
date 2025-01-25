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
import { Button, CategoryButton } from "@components/index";
import { partMap } from "@constants/categories";
import UploadToast from "@components/commons/Toast/UploadToast";

const WritePost: React.FC = () => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);

  const [visibleInputs, setVisibleInputs] = useState<{
    [key: string]: boolean;
  }>({});

  const [showToast, setShowToast] = useState(false);

  const handleUploading = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
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
              <div css={categories}>
                {Object.keys(partMap).map((partName) => (
                  <div key={partName} css={categories}>
                    <CategoryButton
                      style={partMap[partName]}
                      selected={selectedParts.includes(partName)}
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
      </div>
    </main>
  );
};

export default WritePost;
