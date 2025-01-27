import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  width: 1062px;
`;

export const container = css`
  display: flex;
  gap: 7.4rem;
`;

export const titleContainer = css`
  ${theme.font.bodyBold2}
  margin: 4.8rem 0;
`;

export const titleStyle = css`
  display: flex;
  gap: 7.4rem;
`;

export const calendarStyle = css`
  padding: 6.5rem 5rem;
  border-radius: 24px;
  width: 53.7rem;
  border: 1px solid ${theme.color.object.alternative};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  .mbsc-ios.mbsc-datepicker-inline {
    border-color: white;
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

export const taskBoxStyle = css`
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const taskTitleContainer = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const contentStyle = css`
  ${theme.font.caption1};
  color: ${theme.color.object.assistive};
  height: 2.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const taskTitleStyle = css`
  ${theme.font.bodyBold1}
  color: ${theme.color.base.darkgray}
`;

export const memberContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const profileContainer = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const nickNameStyle = css`
  ${theme.font.caption1}
  color: ${theme.color.object.assistive}
`;
