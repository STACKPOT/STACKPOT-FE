import { css } from "@emotion/react";
import { styled } from "@mui/material";
import { PickersLayout } from "@mui/x-date-pickers";
import theme from "@styles/theme";

export const buttonContainer = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const buttonStyle = css`
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${theme.color.point.hero};
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${theme.color.point.alternative};
  }
  padding: 1.4rem 1.9rem;
  border-radius: 8px;
  ${theme.font.caption3};
`;

export const StyledPickersLayout = styled(PickersLayout)({
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

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
`;

export const headerTextStyle = css`
  color: ${theme.color.point.gray};
  text-align: center;
  font-family: Pretendard;
  font-size: 10.073px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.101px;
`;

export const arrowButtonStyle = css`
  padding: 0;
`;
