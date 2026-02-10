import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { datePickerStyle, DatePickerTextField, StyledPickersLayout, } from "./DatePicker.style";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
interface DatePickerProps {
  date?: Dayjs;
  onChange: (date: Dayjs | null) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}
const DatePicker: React.FC<DatePickerProps> = ({
  date,
  onChange,
  minDate,
  maxDate,
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        views={["year", "month"]}
        format="YYYY.MM"
        css={datePickerStyle}
        slots={{
          layout: StyledPickersLayout,
          textField: DatePickerTextField,
        }}
        value={date}
        onAccept={onChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
