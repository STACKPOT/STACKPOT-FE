import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import {
  DateView,
  PickersLayout,
  PickersLayoutProps,

} from "@mui/x-date-pickers";
import theme from "@styles/theme";
import { Dayjs } from "dayjs";

export const datePickerStyle = css`
  display: flex;
  flex-grow: 1;
  margin-left: 3rem;
`;


export const StyledPickersLayout = styled(
  PickersLayout as React.JSXElementConstructor<
    PickersLayoutProps<Dayjs | null, Dayjs, DateView> & React.RefAttributes<HTMLDivElement>
  >
)({
  ".MuiPickersCalendarHeader-label": {
    fontSize: "1.6rem",
  },
  ".MuiDayCalendar-weekDayLabel": {
    fontSize: "1.6rem",
  },
  ".MuiPickersDay-root": {
    fontSize: "1.6rem",
  },
});

export const DatePickerTextField = styled(TextField)`
  width: 18rem;
  padding: 1.2rem 1.6rem;
  input {
    ${theme.font.caption3}
  }
`;
