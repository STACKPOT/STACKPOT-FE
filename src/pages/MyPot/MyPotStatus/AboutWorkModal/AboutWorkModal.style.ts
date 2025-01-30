import { css } from "@emotion/react";
import theme from "@styles/theme";

export const mainContainer = css`
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  background: ${theme.color.base.white};
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 24px;
  width: 84rem;
`;

export const subContainer = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
export const thirdContainer = css`
  display: flex;
  width: 65.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`

export const cancelContainer = css`
  display: flex;
  padding: 0.8rem 0.4rem;
  justify-content: flex-end;
  align-self: center;
  width: 100%;
`

export const cancelIconStyle = css`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`

export const titleContainer = css`
  display: flex;
  width: 100%;
  height: 2.8rem;
  justify-content: center;
  align-items: center;
`

export const titleTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.base.darkgray};
`

export const firstSectionContainer = css`
  display: flex;
  align-items: center;
  gap: 4.2rem;
  width: 100%;
`

export const labelTextStyle = css`
  ${theme.font.caption3};
  color: ${theme.color.base.darkgray};
  white-space: nowrap;
`

export const inputFieldStyle = css`
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-self: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
  height: 5.2rem;
`

export const secondSectionContainer = css`
  display: flex;
  align-items: center;
  gap: 2.9rem;
  width: 100%;
`

export const badgeStyle = css`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.object.alternative};
  ${theme.font.captionBold1};
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
`

export const badgeContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
`

export const selectedBadgeStyle = (color: string) => css`
  background: ${color};
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.object.alternative};
  ${theme.font.captionBold1};
`;

export const explainationInputFieldStyle = css`
  width: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid ${theme.color.object.alternative};
  transition: border 0.3s ease;
  
  &:focus-within {
    border: 2px solid ${theme.color.base.darkgray}; 
  }
`;

export const textareaContainer = css`
  height: 14rem;
  width: 100%;
  resize: none; 
  border: none;
  outline: none;
  ${theme.font.caption3};
  word-wrap: break-word;
  overflow-wrap: break-word; 
  padding: 0;
  background: transparent;
`;

export const contributorContainer = css`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`

export const contributorButtonStyle = (isSelected: boolean) => css`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.point.alternative};
  background: ${isSelected ? theme.color.point.alternative : theme.color.base.white};
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  color: ${theme.color.point.alternative};

  &:hover {
    background: ${theme.color.point.alternative};
    color: ${theme.color.base.white};
  }
`;

export const contributorButtonInnerContainer = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`
export const contributorButtonOuterContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  width: 100%;
  flex-wrap: wrap;
`

export const nicknameStyle = css`
  ${theme.font.captionBold1};
  
`

export const saveButtonStyle = css`
  display: flex;
  width: 42.9rem;
  height: 5rem;
  padding: 0.6rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.hero};
  color: ${theme.color.point.ivory};
  cursor: pointer;
`

export const buttonTextStyle = css`
  ${theme.font.captionBold1};
  font-family: inherit; 
  border: none;
  outline: none;
  background-color: inherit ;
  color: inherit;
`

export const buttonContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;
`

export const anotherSaveButtonStyle = css`
  display: flex;
  width: 19.4rem;
  height: 5rem;
  padding 0.6rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.hero};
  color: ${theme.color.point.ivory};
  cursor: pointer;
`

export const deleteButtonStyle = css`
  display: flex;
  width: 19.4rem;
  height: 5rem;
  padding 0.6rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.color.feedback.negative};
  background: ${theme.color.base.white};
  color: ${theme.color.feedback.negative};
  cursor: pointer;
`
