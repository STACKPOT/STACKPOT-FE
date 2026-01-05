import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  display: flex;
  border-radius: 16px;
  border: 1px solid ${theme.color.object.alternative};
  position: relative;
  cursor: pointer;
`;

export const contentContainer = css`
  width: 74.9rem;
  display: flex;
  flex-direction: column;
  padding: 4.5rem 3.8rem;
  border-right: 1px solid ${theme.color.object.alternative};
`;

export const informationContainer = css`
  width: 35.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 5.2rem 3.4rem;
`;

export const titleContainer = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const titleStyle = css`
  width: 100%;
  ${theme.font.title2};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const contentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.object.hero};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 0.8rem;
`;

export const partBadgeContainer = css`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.6rem;
`;

export const memberGroupContainer = css`
  margin-top: 1.6rem;
`;

export const elementContainer = css`
  display: flex;
  gap: 0.8rem;
`;

export const elementLabelStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.hero};
  white-space: nowrap;
`;

export const elementContentStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.point.hero};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const layerStyle = css`
  width: 35.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const layerBackground = (color: "blue" | "red") => css`
  width: 100%;
  height: 100%;
  border-radius: 0px 15px 15px 0px;
  opacity: 0.5;
  background-color: ${color === "blue"
    ? theme.color.accent.blueBg
    : theme.color.accent.redBg};
`;

export const buttonStyle = css`
  opacity: 1;
  position: absolute;
`;
