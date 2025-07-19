import { secondSectionContainer } from "./DateInput.style";
import { labelTextStyle } from "../AboutWorkModal/AboutWorkModal.style";
import { DatePickerButton } from "@components/index";
import { Dayjs } from "dayjs";
import { forwardRef } from "react";

interface DateInputProps {
  onChange: (date: Dayjs) => void;
  date?: Dayjs;
}

const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  ({ onChange, date }, ref) => {
    return (
      <div css={secondSectionContainer} ref={ref}>
        <div css={labelTextStyle}>마감일</div>
        <DatePickerButton
          onChange={(day) => day && onChange(day)}
          date={date}
        />
      </div>
    );
  }
);

export default DateInput;
