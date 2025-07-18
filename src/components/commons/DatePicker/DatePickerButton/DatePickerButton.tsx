import * as React from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { UseDateFieldProps } from "@mui/x-date-pickers/DateField";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from "@mui/x-date-pickers/models";
import { WhiteCalendarIcon } from "@assets/svgs";
import {
  arrowButtonStyle,
  buttonContainer,
  buttonStyle,
  headerStyle,
  headerTextStyle,
  StyledPickersLayout,
} from "./DatePickerButton.style";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import "dayjs/locale/ko";

function CustomCalendarHeader(props: PickersCalendarHeaderProps<Dayjs>) {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () =>
    onMonthChange(currentMonth.add(1, "month"), "left");
  const selectPreviousMonth = () =>
    onMonthChange(currentMonth.subtract(1, "month"), "right");

  return (
    <div css={headerStyle}>
      <Stack spacing={1} direction="row">
        <IconButton
          css={arrowButtonStyle}
          onClick={selectPreviousMonth}
          title="Previous month"
        >
          <ChevronLeft />
        </IconButton>
      </Stack>
      <p css={headerTextStyle}>{currentMonth.format("YYYY년 MM월")}</p>
      <Stack spacing={1} direction="row">
        <IconButton
          css={arrowButtonStyle}
          onClick={selectNextMonth}
          title="Next month"
        >
          <ChevronRight />
        </IconButton>
      </Stack>
    </div>
  );
}

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs, false>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      false,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ButtonDatePickerProps {
  onChange: (date: Dayjs | null) => void;
  date?: Dayjs;
}

const ButtonField = (props: ButtonFieldProps) => {
  const {
    setOpen,
    id,
    InputProps: { ref } = {},
    inputProps: { "aria-label": ariaLabel } = {},
  } = props;

  return (
    <Button
      css={buttonStyle}
      variant="outlined"
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      <div css={buttonContainer}>
        <WhiteCalendarIcon />
        날짜 선택하기
      </div>
    </Button>
  );
};

const ButtonDatePicker = (
  props: Omit<DatePickerProps<Dayjs>, "open" | "onOpen" | "onClose">
) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{
        ...props.slots,
        field: ButtonField,
        layout: StyledPickersLayout,
        calendarHeader: CustomCalendarHeader,
      }}
      slotProps={{
        ...props.slotProps,
        field: { setOpen } as any,
      }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
};

/**
 *
 * @param onChange - 날짜 선택시 콜백
 * @param date - (optional)날짜 초기 값
 *
 */
const DatePickerButton: React.FC<ButtonDatePickerProps> = ({
  onChange,
  date,
}: ButtonDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <ButtonDatePicker
        value={date}
        onChange={(newValue) => onChange(newValue)}
      />
    </LocalizationProvider>
  );
};

export default DatePickerButton;
