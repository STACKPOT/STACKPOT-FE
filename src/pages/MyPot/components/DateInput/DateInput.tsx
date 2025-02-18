import { DatePicker } from "@pages/CreatePot/components";
import { secondSectionContainer } from "./DateInput.style";
import { labelTextStyle } from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal.style";

interface DateInputProps {
  onChange: (date: any) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onChange }) => (
  <div css={secondSectionContainer}>
    <div css={labelTextStyle}>마감일</div>
    <DatePicker onChange={onChange} />
  </div>
);

export default DateInput;
