import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import {
  datePickerCalendarStyle,
  datePickerStyle,
  StyledPickersLayout,
} from "./DatePicker.style";
import { Dayjs } from "dayjs";

interface DatePickerProps {
  date?: Dayjs;
  onChange: (date: Dayjs | null) => void;
}
const DatePicker: React.FC<DatePickerProps> = ({ date, onChange }: DatePickerProps) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          css={[datePickerCalendarStyle, datePickerStyle]}
          slots={{
            layout: StyledPickersLayout,
          }}
          value={date}
          onChange={onChange}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
