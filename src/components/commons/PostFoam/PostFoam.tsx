import React from "react";
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import {
  contentBody,
  inputStyle,
  textareaStyle,
  categoryContainer,
  categories,
} from "./postFoam.style";
import { CategoryButton } from "@components/index";
import { partMap } from "@constants/categories";

interface PostFormBodyProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
}

const PostFormBody: React.FC<PostFormBodyProps> = ({
  register,
  watch,
  setValue,
}) => {
  return (
    <div css={contentBody}>
      <input
        css={inputStyle}
        placeholder="메인 제목 작성"
        {...register("title", { required: true })}
      />

      <textarea
        css={textareaStyle}
        placeholder="나의 열정을 이야기해봐요"
        {...register("content", { required: true })}
      />

      <div css={categoryContainer}>
        카테고리
        <div css={categories}>
          {Object.keys(partMap).map((partName) => (
            <CategoryButton
              key={partName}
              style={partMap[partName]}
              selected={watch("category") === partMap[partName]}
              onClick={() => setValue("category", partMap[partName])}
            >
              {partName}
            </CategoryButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostFormBody;
