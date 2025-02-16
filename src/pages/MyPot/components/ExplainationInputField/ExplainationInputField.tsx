import React, { forwardRef } from "react";
import { explainationInputFieldStyle, textareaContainer } from "./ExplainationInputField.style";

interface ExplainationInputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const ExplainationInputField = forwardRef<HTMLTextAreaElement, ExplainationInputFieldProps>(({ value, onChange, placeholder, ...props }, ref) => (
  <div css={explainationInputFieldStyle}>
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      css={textareaContainer}
      {...props}
    />
  </div>
));

export default ExplainationInputField;
