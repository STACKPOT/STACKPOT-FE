import { css } from "@emotion/react";
import theme from "@styles/theme";

export type ButtonType = "modify" | "permission";

export const container = css`
  width: 1062px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 4.8rem 0;
`;

export const titleStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const headerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const textStyle = css`
  ${theme.font.title3};
  color: ${theme.color.point.hero};
`;

export const inputStyle = css`
  ${theme.font.body3};
  color: black;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  padding: 1.2rem 1.6rem;
  width: 70rem;
  :focus {
    border: 1px solid ${theme.color.point.alternative};
    outline: none;
  }
  ::placeholder {
    color: ${theme.color.object.hero};
  }
`;

export const titleButtonStyle = css`
  display: flex;
  gap: 1.6rem;
`;

export const actionButtonStyle = (type: ButtonType) => css`
  ${theme.font.caption3};
  color: ${theme.color.point.gray};
  border-radius: 8px;
  border: 1px solid ${type === "modify" ? theme.color.object.assistive : ""};
  background-color: white;
  padding: 1.4rem 1.9rem;
  white-space: nowrap;

  color: ${type === "modify" ? theme.color.point.gray : "white"};
  background-color: ${type === "modify" ? "white" : theme.color.point.hero};
`;

export const iconStyle = css`
  width: 4rem;
  height: 4rem;
  color: ${theme.color.object.hero};
`;

export const tabsContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
  align-self: stretch;
`;

export const navLinkStyle = (isActive: boolean) => css`
  color: ${isActive
    ? theme.color.point.hero
    : theme.color.interactive.inactive};
  text-decoration: none;
  padding: 1.2rem 3rem;
  ${theme.font.title2};
  cursor: pointer;
  &:hover {
    color: ${theme.color.point.hero};
  }
`;

export const memberListContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  grid-gap: 1.2rem 2.4rem;
  max-height: 28rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable;
`;
