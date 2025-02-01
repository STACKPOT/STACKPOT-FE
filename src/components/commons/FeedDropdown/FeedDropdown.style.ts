import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dropdownMenuStyle = css`
  position: absolute;
  top: calc(100% + 8px);
  right: 0; 
  width: 16rem;
  display: flex;
  flex-direction: column;
  background: ${theme.color.base.white};
  border: 0.1rem solid ${theme.color.object.alternative};
  border-radius: 16px;
  z-index: 10;
  padding: 0.8rem 0;
`;

export const dropdownItemStyle = css`
  display: flex;
  padding: 1rem;
  ${theme.font.caption3};
  align-self: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

export const dropdownDeleteItemStyle = css`
  ${dropdownItemStyle};
  color: ${theme.color.feedback.negative}; 
  font-weight: bold; /* 강조 */
  &:hover {
    background: rgba(255, 0, 0, 0.1); 
  }
`;

export const dropdownDividerStyle = css`
  width: 100%;
  height: 1px;
  background-color: ${theme.color.object.alternative};
  margin: 0.4rem 0; 
`;
