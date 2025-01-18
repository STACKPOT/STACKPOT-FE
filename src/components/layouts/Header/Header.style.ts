import { css } from "@emotion/react";
import theme from "@styles/theme";

export const headerStyle = css`
  padding: 1rem 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.point.ivory};
  border-bottom: 1px solid ${theme.color.object.alternative};
`;
