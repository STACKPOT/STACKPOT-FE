import { css } from "@emotion/react";
import theme from "@styles/theme";

export const RoleUpdateContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
`;

export const contentHeader = css`
  ${theme.font.caption3};
  color: ${theme.color.base.black};
  display: flex;
`;

export const InputRow = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const NicknameInput = css`
  ${theme.font.bodyBold3};
  width: 52.2rem;
  padding: 1.1rem 1.7rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  outline: none;
  color: ${theme.color.point.hero};
  
`;

export const SubmitButton = css`
  ${theme.font.caption3};
  padding: 1.4rem 1.9rem;
  background-color: ${theme.color.point.hero};
  color: white;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
`;
