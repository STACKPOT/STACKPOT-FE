import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  width: 1062px;
`;

export const container = css`
  display: flex;
  gap: 7.4rem;
`;

export const taskContainerStyle = css`
  height: 46.4rem;
  overflow-y: auto;
  ::-webkit-scrollbar{
    display: none;
  }
`;

export const calendarDateStyle = css`
  ${theme.font.body3};
  color: ${theme.color.object.assistive};
  height: 3.4rem;
  margin: 0.4rem;
  border-color: transparent;
`;

export const calendarStyle = css`
  padding: 7.2rem 5rem;
  border-radius: 24px;
  width: 53.6rem;
  border: 1px solid ${theme.color.object.alternative};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  color: ${theme.color.base.darkgray};

  .mbsc-ios.mbsc-datepicker-inline {
    border-color: white;
  }
  .mbsc-calendar-day-text{
    ${calendarDateStyle};
  }
  .mbsc-hover .mbsc-ios .mbsc-calendar-day-text{
    ${calendarDateStyle};
    background: transparent;
  }
  .mbsc-selected .mbsc-ios .mbsc-calendar-day-text{
    ${calendarDateStyle};
    background: ${theme.color.point.alternative};
    color: white;
  }
  .mbsc-calendar-marks {
    bottom: -0.4rem;
  }
  .mbsc-calendar-cell {
    padding-bottom: 1.7rem;
  }
  .mbsc-calendar-week-days {
    margin-bottom: 1.4rem;
  }
  .mbsc-calendar-week-day {
    ${theme.font.bodyBold1};
  }
  .mbsc-calendar-title {
    ${theme.font.title1};
  }
  .mbsc-button-icon{
    color: ${theme.color.base.darkgray};
  }
  .mbsc-calendar-header {
    padding-bottom: 5.4rem;
  }
  .mbsc-calendar-controls {
    min-height: 0;
  }
  .mbsc-calendar-slide {
    padding: 0;
  }
  .mbsc-calendar-button {
    padding: 0 0.8rem;
    height: auto;
  }
  .mbsc-ios.mbsc-calendar-button.mbsc-button {
    color: ${theme.color.base.darkgray};
    cursor: auto;
  }
  .mbsc-hover.mbsc-ios.mbsc-calendar-button.mbsc-button{
    opacity: 1;
  }
`;

export const taskContainer = css`
  padding: 3.2rem 2.4rem;
  height: 58.8rem;
  width: 45rem;

  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
`;

export const dateStyle = css`
  ${theme.font.title1}
  text-align: center;
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.object.alternative};
  margin: 1.6rem 0;
`;

export const noticeStyle = css`
  ${theme.font.title1};
  color: ${theme.color.interactive.inactive};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
