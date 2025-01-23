import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import {
  datePickerCalendarStyle,
  datePickerStyle,
  StyledPickersLayout,
} from "./DatePicker.style";

const DatePicker = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          css={[datePickerCalendarStyle, datePickerStyle]}
          slots={{
            layout: StyledPickersLayout,
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
