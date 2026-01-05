import { css } from "@emotion/react";
import theme from "@styles/theme";

export const appealContainer = css`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.3rem;
  width: 100%;
  border-radius: 8px;
`;

export const appealContainerMemberStyle = css`
  background-color: ${theme.color.object.normal};
`;

export const appealContainerNotMemberStyle = css`
  border: 1px solid ${theme.color.object.assistive};
`;

export const appealTitleContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${theme.font.title2}
  color: ${theme.color.point.hero};
`;

export const appealTitleButtonContainer = css`
  display: flex;
  gap: 0.8rem;
`;

export const appealContentStyle = css`
  margin-top: 0.8rem;
`;

export const appealBadgeListContainer = css`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.6rem;
`;

export const appealTextAreaStyle = css`
  background-color: white;
  padding: 2.4rem;
  min-height: 23.8rem;
  margin-top: 0.8rem;
  border: 1px solid white;
  resize: none;
  ${theme.font.body3}
  &::placeholder {
    color: ${theme.color.object.hero};
  }
  &:focus {
    border: 1px solid ${theme.color.point.alternative};
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const summaryContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  padding: 2.4rem 2.3rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.point.alternative};
  background-color: ${theme.color.point.normal};
`;

export const summaryLabelStyle = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${theme.color.point.assistive};
  ${theme.font.caption3};
`;

export const summaryContentStyle = css`
  ${theme.font.body3};
  color: ${theme.color.point.gray};
`;

export const languageLabelContainer = css`
  display: flex;
`;
export const languageListContainer = css`
  display: flex;
  gap: 0.4rem;
  margin-left: 1.6rem;
`;
