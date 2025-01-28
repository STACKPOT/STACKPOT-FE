import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  width: 1062px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 4.8rem 0;
`;

export const headerStyle = css`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`

export const textStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.point.hero};
`

export const iconStyle = css`
  color: ${theme.color.point.hero}
`

export const tabsContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;
  align-self: stretch;
`

export const tabsTextStyle = css`
  ${theme.font.bodyBold2};

  &:hover {
    transform: scale(1.05);
  }

`