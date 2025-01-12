import { css } from "@emotion/react";
import theme from "@styles/theme";

export const footerStyle = css`
  width: 100%;
  padding: 60px 140px;
  background: ${theme.color.point.ivory};
  border-top: 4px solid ${theme.color.point.hero};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentStyle = css`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const sectionStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
`;

export const linkStyle = css`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 500;
  line-height: 28px;
  color: ${theme.color.interactive.inactive};
`;

export const textStyle = css`
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 500;
  line-height: 28px;
  color: ${theme.color.interactive.inactive};
`;

export const legalStyle = css`
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 500;
  line-height: 28px;
  color: ${theme.color.interactive.inactive};
`;
