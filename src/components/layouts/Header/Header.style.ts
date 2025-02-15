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

export const searchIconStyle = css`
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

export const profileStyle = css`
  width: 3.2rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;

export const guestProfileStyle = css`
  width: 3.2rem;
  margin-right: 3.2rem;
`;

export const profileContainer = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const iconStyle = css`
  cursor: pointer;
`;
