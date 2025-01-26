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

export const containerStyle = (props: {
  borderBottom?: string;
  color: string;
}) => css`
  padding: 1rem;
  ${props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
  color: ${props.color};
  ${theme.font.caption3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
