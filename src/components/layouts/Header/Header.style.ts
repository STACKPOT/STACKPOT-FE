import { css } from "@emotion/react";
import theme from "@styles/theme";

export const headerStyle = css`
  padding: 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.point.ivory};
  border-bottom: 1px solid ${theme.color.object.alternative};
`;

export const iconStyle = css`
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.8rem;
  color: ${theme.color.interactive.inactive};
  cursor: pointer;
`;

export const iconContainer = css`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;
