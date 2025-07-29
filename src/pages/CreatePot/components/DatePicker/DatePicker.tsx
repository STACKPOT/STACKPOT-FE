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
}
const DatePicker: React.FC<DatePickerProps> = ({
  date,
  onChange,
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        // views={["year", "month"]}
        format="YYYY.MM.DD"
        css={datePickerStyle}
        slots={{
          layout: StyledPickersLayout,
          textField: DatePickerTextField,
        }}
        value={date}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
