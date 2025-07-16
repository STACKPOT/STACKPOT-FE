import { css } from "@emotion/react";
import { styled } from "@mui/system";
import {
  DateView,
  PickersLayout,
  PickersLayoutProps,
} from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

export const datePickerStyle = css`
  display: flex;
  flex-grow: 1;
  margin-left: 3rem;
  font-size: 1.6rem;
`;


export const StyledPickersLayout = styled(PickersLayout)<
  PickersLayoutProps<Dayjs | null, Dayjs, DateView>
>({
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
