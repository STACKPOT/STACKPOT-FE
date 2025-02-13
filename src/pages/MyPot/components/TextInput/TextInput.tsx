import { firstSectionContainer, inputFieldStyle } from "./TextInput.style";
import { labelTextStyle } from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal.style";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => (
  <div css={firstSectionContainer}>
    <div css={labelTextStyle}>업무 제목</div>
    <input type="text" value={value} onChange={onChange} placeholder="업무 제목을 입력하세요" css={inputFieldStyle} />
  </div>
);

export default TextInput;
