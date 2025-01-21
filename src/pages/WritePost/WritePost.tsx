import React from "react";
import {
  container,
  contentTitle,
  content,
  iconStyle,
  contentBody,
  titleText,
  textareaStyle,
} from "./WritePost.style";
import { PotIcon } from "@assets/svgs";
import { SelectableField, SignUpButton, TextField } from "@components/index";
import { toast } from "react-toastify";

const WritePost: React.FC = () => {
  return (
    <main>
      <div css={container}>
        <div css={content}>
          <div css={contentTitle}>
            <p>게시물 작성하기</p>
            <PotIcon css={iconStyle} />
          </div>
          <SignUpButton>게시물 업로드</SignUpButton>
          <div css={contentBody}>
            <TextField placeholder="메인 제목 작성" inputCss={titleText} />
            <textarea
              css={textareaStyle}
              placeholder="나의 열정을 이야기해봐요"
            />
            <SelectableField />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WritePost;
