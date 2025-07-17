import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Dayjs } from "dayjs";
import {
  datePickerCalendarStyle,
  datePickerStyle,
  StyledPickersLayout,
} from "@pages/CreatePot/components/DatePicker/DatePicker.style";
import {
  DatePicker,
  DatePickerFieldProps,
  DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface ButtonDatePickerProps {
  date?: Dayjs;
  onChange: (date: Dayjs | null) => void;
}

const ButtonDateField = (props: DatePickerFieldProps) => {
  return <div></div>;
};
const ButtonFieldDatePicker = (props: DatePickerProps) => {
  return (
    <DatePicker {...props} slots={{ ...props.slots, field: ButtonDateField }} />
  );
};

const ButtonDatePicker: React.FC<DatePickerProps> = ({
  date,
  onChange,
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <ButtonDateField
        css={[datePickerCalendarStyle, datePickerStyle]}
        slots={{
          layout: StyledPickersLayout,
        }}
        value={date}
        onChange={onChange}
      /> */}
      <ButtonFieldDatePicker />
    </LocalizationProvider>
  );
};

export default ButtonDatePicker;
