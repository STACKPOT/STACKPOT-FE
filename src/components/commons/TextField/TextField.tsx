import { inputStyle, labelStyle, textStyle } from "./TextField.style";
import { css, SerializedStyles } from "@emotion/react";

interface TextFieldProps {
  placeholder: string;
  label?: string;
  supportingText?: string;
  labelCss?: SerializedStyles;
  inputCss?: SerializedStyles;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  label,
  supportingText,
  labelCss,
  inputCss,
}) => {
  return (
    <label css={[labelStyle, labelCss]}>
      {label}
      <input placeholder={placeholder} css={[inputStyle, inputCss]} />
      {supportingText && <p css={textStyle}>{supportingText}</p>}
    </label>
  );
};

export default TextField;
