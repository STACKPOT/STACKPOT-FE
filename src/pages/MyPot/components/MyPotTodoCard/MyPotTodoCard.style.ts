import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    width: 26.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
`;

export const profileImageStyle = css`
    width: 7.2rem;
    height: 7.2rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`;

export const nicknameStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.object.assistive};
    display: flex;
    align-items: center; 
    gap: 1rem;
`;

export const statusContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
`;

export const todoListContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: 11.6rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;
`;

export const todoContainer = css`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 26.5rem;
`;

export const checkBoxStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1rem;
    height: 2.1rem;
    border: 0.1rem solid ${theme.color.interactive.inactive};
    border-radius: 0.6rem;
`;

export const todoTextStyle = css`
    ${theme.font.caption3}
    color: ${theme.color.base.darkgray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

export const plusButtonStyle = css`
    cursor: pointer;
    height: 1.9rem;
`;
