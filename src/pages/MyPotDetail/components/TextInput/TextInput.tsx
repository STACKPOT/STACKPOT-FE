import React, { forwardRef } from "react";
import { firstSectionContainer, inputFieldStyle } from "./TextInput.style";
import { labelTextStyle } from "../AboutWorkModal/AboutWorkModal.style";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ value, onChange, ...props }, ref) => (
    <div css={firstSectionContainer}>
      <div css={labelTextStyle}>업무 제목</div>
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder="업무 제목 입력"
        css={inputFieldStyle}
        {...props}
      />
    </div>
  )
);

export default TextInput;
