import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownStyle = css`
  width: 16rem;
  height: 9.7rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 1.6rem;
  flex-direction: column;
  position: fixed;
`;

export const iconStyle = css`
  cursor: pointer;
`;

export const containerStyle = (edit: boolean) => css`
  border-bottom: ${edit
    ? `1px solid ${theme.color.object.alternative}`
    : "none"};
  color: ${edit ? theme.color.point.gray : theme.color.feedback.negative};

  ${theme.font.caption3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
`;
