import React, { forwardRef } from "react";
import { textareaContainer } from "./ExplainationInputField.style";

interface ExplainationInputFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const ExplainationInputField = forwardRef<
  HTMLTextAreaElement,
  ExplainationInputFieldProps
>(({ value, onChange, placeholder, ...props }, ref) => (
  <textarea
    ref={ref}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    css={textareaContainer}
    {...props}
  />
));

export default ExplainationInputField;
