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


export const StyledPickersLayout = styled(PickersLayout as React.JSXElementConstructor<PickersLayoutProps<Dayjs | null, Dayjs, DateView> & React.RefAttributes<HTMLDivElement>>)({
  ".MuiPickersCalendarHeader-label": {
    fontSize: "1.3rem",
  },
  ".MuiDayCalendar-weekDayLabel": {
    height: "3rem",
    width: "3rem",
    color: `${theme.color.point.gray}`,
    fontSize: "9px",
    fontFamily: "Pretendard",
  },
  ".MuiPickersDay-root": {
    width: "3rem",
    height: "3rem",
    color: `${theme.color.point.gray}`,
    fontSize: "12px",
    fontFamily: "Pretendard",
    fontWeight: "700",
  },

  ".MuiDateCalendar-root": {
    width: "39.3rem",
    borderRadius: "8px",
    backgroundColor: `${theme.color.point.normal}`,
    padding: "1.9rem 2.4rem",
    height: "fit-content",
  },
  ".MuiDayCalendar-header": {
    display: "flex",
    gap: "2rem",
    borderBottom: `1px solid ${theme.color.object.alternative}`,
  },
  ".MuiPickersSlideTransition-root": {
    minHeight: "19.4rem",
  },
  ".MuiDayCalendar-weekContainer": {
    gap: "2rem",
  },
});

export const DatePickerTextField = styled(TextField)`
  width: 18rem;
  padding: 1.2rem 1.6rem;
  input {
    ${theme.font.caption3}
  }
`;
