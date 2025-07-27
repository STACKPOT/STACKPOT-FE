import { css } from "@emotion/react";
import theme from "@styles/theme";

export const containerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  background: transparent;
  border: 1px solid transparent;
  border-radius: 16px;
  cursor: pointer;
  justify-content: center;
  position: relative;
  border-color: ${theme.color.object.alternative};

  padding: 2.5rem 3.7rem;
  gap: 1.6rem;
  background : ${theme.color.base.white};
  
`;

export const selectedStyle = css`
  border-color: ${theme.color.point.hero};
  background: ${theme.color.point.hero};
`;

export const imageStyle = css`
  width: 4.0rem;
  height: 4.0rem;
  border-radius: 40px;
  border: 1px solid ${theme.color.object.alternative};
`;

export const labelStyle = css`
  ${theme.font.caption2};
  color: ${theme.color.base.black};
`;


export const checkIconStyle = ({ checked }: { checked: boolean }) => css`
  width: 2.4rem;
  height: 2.4rem;

  --check-fill: ${checked ? theme.color.base.white : theme.color.point.hero};
`;

export const myRoleSectionStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`;

export const editingContainerStyle = css`
  background-color:${theme.color.accent.blueBg};
  padding: 1.7rem 3.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const labelTextStyle = css`
  ${theme.font.caption3};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`;

export const inputStyle = css`
  width: 9.3rem;
  border: 1px solid ${theme.color.point.alternative};
  border-radius: 10px;
  padding: 1.2rem 3.6rem 1.2rem 1.6rem;
  text-align: right;
`;

export const editingRowStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const inputWrapperStyle = css`
  position: relative;
  width: fit-content;
`;

export const suffixTextInsideInputStyle = css`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.color.object.hero};
  pointer-events: none;
`;
