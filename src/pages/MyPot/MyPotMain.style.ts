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
  align-items: center;
  gap: 1.6rem;
`

export const textStyle = css`
  ${theme.font.bodyBold2};
  color: ${theme.color.point.hero};
`

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  color: #262626;
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

export const viewId = css `
  padding: 0.8rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 4px;
  background: #FEE500;
  cursor: pointer;
`

export const viewTextStyle = css`
  ${theme.font.caption1};
  color: rgba(0, 0, 0, 0.85);
`