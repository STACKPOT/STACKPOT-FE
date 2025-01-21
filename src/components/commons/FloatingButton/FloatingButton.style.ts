import { css } from "@emotion/react";
import theme from "@styles/theme";

export const WriteButton = css`
  width: 12.2rem;
  height: 5.4rem;
  padding: 1.6rem 2.4rem;
  background: rgba(112, 115, 124, 0.2);
  border-radius: 5rem;
  backdrop-filter: blur(30px);
  align-items: center;
  display: flex;
  color: ${theme.color.point.alternative};
  ${theme.font.bodyBold1};
  gap: 1rem;
  cursor: pointer;
  position: fixed;
  bottom: 2.5rem;
  right: 3.9rem;
`;
