import { inputStyle, labelStyle, textStyle } from "./TextField.style";

interface TextFieldProps {
  placeholder: string;
  label?: string;
  supportingText?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  label,
  supportingText,
}) => {
  return (
    <>
      <label css={labelStyle}>
        {label}
        <input placeholder={placeholder} css={inputStyle} />
        <p css={textStyle}>{supportingText}</p>
      </label>
    </>
  );
};

export default TextField;
