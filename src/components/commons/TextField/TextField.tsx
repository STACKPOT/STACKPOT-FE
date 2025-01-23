import { inputStyle, containerStyle, textStyle } from "./TextField.style";

interface TextFieldProps {
  children: string;
  placeholder: string;
  supportingText?: string;
  onTextChange: (text: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  children,
  placeholder,
  supportingText,
  onTextChange,
}) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value);
  }

  return (
    <div css={containerStyle}>
      <input value={children} placeholder={placeholder} css={inputStyle} onChange={handleChange} />
      <p css={textStyle}>{supportingText}</p>
    </div>
  );
};

export default TextField;
