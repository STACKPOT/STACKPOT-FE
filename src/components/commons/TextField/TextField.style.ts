import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
`;
export const inputStyle = css`
  padding: 1.2rem 1.6rem;
  ${theme.font.caption3};
  ::placeholder {
    color: ${theme.color.interactive.inactive};
  }
  color: ${theme.color.base.darkgray};
  border-radius: 8px;
  border: 1px solid ${theme.color.border.alternative};
  outline: none;
  &:focus {
    border-color: ${theme.color.point.hero};
  }
`;
export const readOnlyInputStyle = css`
  ${inputStyle};
  &:focus {
        border: 1px solid ${theme.color.feedback.negative};
    }
`
export const nicknameInputDoneStyle = css`
    ${readOnlyInputStyle};
    color: ${theme.color.point.hero};
    border-color: ${theme.color.point.hero};
    &:focus {
      color: ${theme.color.base.darkgray};
    }
`
export const supportingTextStyle = css`
    ${theme.font.caption2};
    color: ${theme.color.feedback.positive};
`
export const supportingTextWarningStyle = css`
    ${theme.font.caption2};
    color: ${theme.color.feedback.negative};
`