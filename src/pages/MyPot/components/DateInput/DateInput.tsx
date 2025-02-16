import { DatePicker } from "@pages/CreatePot/components";
import { secondSectionContainer } from "./DateInput.style";
import { labelTextStyle } from "@pages/MyPot/MyPotStatus/AboutWorkModal/AboutWorkModal.style";

interface DateInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => (
  <div css={secondSectionContainer}>
    <div css={labelTextStyle}>마감일</div>
    <DatePicker selected={new Date(value)} onChange={onChange} />
  </div>
);

export default DateInput;
