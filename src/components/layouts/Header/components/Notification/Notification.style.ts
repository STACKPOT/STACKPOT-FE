import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 3rem;
  background-color: white;
  position: absolute;
  margin-top: 2.4rem;
  right: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  height: 31.4rem;
  width: 42rem;
  overflow-y: auto;
`;

export const dividerStyle = css`
  width: 100%;
  border-bottom: 1px solid ${theme.color.object.alternative};
  margin: 0.8rem 0;
`;

export const emptyStateStyle = css`
  ${theme.font.title1};
  margin: 0.8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const emptyTitleStyle = css`
  color: ${theme.color.object.hero};
`;
