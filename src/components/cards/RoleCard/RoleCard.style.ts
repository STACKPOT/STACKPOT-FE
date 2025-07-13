import { css } from "@emotion/react";
import theme from "@styles/theme";

export const container = css`
  width: 20.1rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  background-color: ${theme.color.base.white};
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 16px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

export const selectedContainerStyle = css`
  background-color: ${theme.color.point.hero};
  border-color: ${theme.color.point.hero};
`;

export const checkIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  transition: all 0.3s ease-out;
`;

export const profileStyle = css`
  width: 4rem;
  height: 4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
  background-color: white;
`;

export const recruitmentCardStyle = css`
  width: 22.9rem;
`;

export const recruitmentCountContainer = css`
  background-color: ${theme.color.accent.blueBg};
  border-color: ${theme.color.accent.blueBg};
  gap: 1rem;
`;

export const recruitmentCountTextStyle = css`
  ${theme.font.caption3};
`;

export const recruitmentCountFieldStyle = css`
  width: 125px;
  display: flex;
  gap: 1.2rem;
  justify-content: end;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  background-color: ${theme.color.base.white};
`;

export const recruitmentCountFieldFocusStyle = css`
  border-color: ${theme.color.point.alternative};
`;

export const recruitmentCountInputStyle = css`
  border: none;
  ${theme.font.caption3};
  min-width: 0;
  text-align: end;
  &:focus{
    outline: none;
  }
`

export const recruitmentCountFieldTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.object.hero};
`;