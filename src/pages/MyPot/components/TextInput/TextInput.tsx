import { firstSectionContainer, inputFieldStyle } from "./TextInput.style";
import { labelTextStyle } from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal.style";

const TextInput: React.FC = () => (
  <div css={firstSectionContainer}>
    <div css={labelTextStyle}>업무 제목</div>
    <input type="text" placeholder="업무 제목을 입력하세요" css={inputFieldStyle} />
  </div>
);

export default TextInput;
