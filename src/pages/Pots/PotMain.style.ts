import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 4.8rem 0;
`;

export const selectContainer = css`
  width: 91.6rem;
  justify-content: center;
  gap: 1.6rem;
` 

export const tabsContainer = css`
  display: flex;
  padding: 1.6rem 0;
  align-items: flex-end;
  gap: 3.2rem;
`

export const tabsTextStyle = css`
  ${theme.font.bodyBold2};

  &:hover {
    transform: scale(1.05);
  }

`