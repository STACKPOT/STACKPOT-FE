import { css } from '@emotion/react';
import theme from "@styles/theme";

export const mainContainer = css`
  width: 106.2rem;
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


export const calendarStyle = css`
  padding: 3.2rem 5rem;
  border-radius: 24px;
  width: 53.6rem
  border: 1px solid ${theme.color.object.alternative};
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.04);
  color: ${theme.color.base.darkgray};  
`;

export const taskContainer = css`
  padding: 3.2rem 2.4rem;
  height: 58.8rem;
  width: 45rem;

  border-radius: 24px;
  border: 1px solid ${theme.color.object.alternative};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
`;

export const dateAndButtonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const dateStyle = css`
  ${theme.font.title1}
  color: ${theme.color.point.hero};
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
  color: ${theme.color.object.hero};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const emptyTaskContainerStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  gap: 1.6rem;
`;

export const dayPickerGlobalStyle = css`
  * {
    ${theme.font.title1}
  }
  
  .rdp-root {
    --rdp-accent-color: ${theme.color.point.gray};
    --rdp-nav-height: 65px;
    --rdp-selected-border: none;
  }
  
  .rdp-day {
    color: ${theme.color.object.hero}
  }
  
  .rdp-selected {
    background-color: ${theme.color.point.hero}; 
    color:${theme.color.base.white} !important;
    border-radius: 100%;
    border: none;
  }

  .rdp-month_grid {
    border-collapse: separate;
    border-spacing: 0 20px;
  }

  .has-task {
    position: relative;
  }

  .has-task::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${theme.color.point.hero};
  }
`;