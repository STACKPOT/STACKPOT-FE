import { DatePicker } from "@pages/CreatePot/components";
import { secondSectionContainer } from "./DateInput.style";
import { labelTextStyle } from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal.style";

const DateInput: React.FC = () => (
  <div css={secondSectionContainer}>
    <div css={labelTextStyle}>마감일</div>
    <DatePicker />
  </div>
);

export default DateInput;
