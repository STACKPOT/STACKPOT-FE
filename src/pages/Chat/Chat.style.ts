import { css } from "@emotion/react";
import theme from "@styles/theme";

export const chatRoomIconTextWrapperStyle = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const chatRoomIconImgStyle = css`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const chatRoomContentStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 ;
  align-self: stretch;
`;

export const pageWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8.4rem 0;
`;

export const chatWrapperStyle = css`
  display: flex;
  width: 90%;
  max-width: 110rem;
  height: 83rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const sidebarStyle = css`
  width: 38.6rem;
`;

export const chatRoomTitleStyle = css`
  ${theme.font.title1}
  display: flex;
  height: 7.4rem;
  padding: 1.6rem 3.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
`;

export const chatRoomListStyle = css`
  display: flex;
  flex-direction: column;
`;

export const chatRoomItemStyle = (isSelected: boolean) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 3.8rem;
  transition: background-color 0.2s;
  background-color: ${isSelected ? "#F1F9FF" : "#FFF"};
`;

export const chatRoomInfoStyle = css`
  align-items: center;
  align-self: stretch;
  flexDirection: column;
`;

export const chatRoomNameTimeWrapperStyle = css`
  ${theme.font.captionBold1}
  display: flex;
  align-items: left;
  width: 20rem;
  gap: 0.4rem;
`;

export const chatRoomNameStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 15rem;
  text-align: center;
`;

export const chatRoomTimeStyle = css`
  color: ${theme.color.object.hero};
`;

export const chatRoomDescStyle = css`
  ${theme.font.body1}
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20rem;
  text-align: left;
`;

export const chatMainStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const chatTopBarStyle = css`
  display: flex;
  height: 7.4rem;
  padding: 1.6rem 3.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 0px 8px 8px 0px;
  background: ${theme.color.point.normal};
`;

export const selectedRoomStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const chatRoomHeaderStyle = css`
  ${theme.font.title1}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 22rem;
  text-align: center;
`;

export const chatRoomTextStyle = css`
  ${theme.font.caption1}
  color: ${theme.color.object.hero};
  text-align: center;
  white-space: nowrap; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const chatPlaceholderStyle = css`
  ${theme.font.title1}
  color: ${theme.color.object.hero};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  gap: 0.8rem;
`;

export const inputContainerStyle = css`
  position: relative;
  display: flex;
  background-color: #fff;
`;

export const textAreaStyle = css`
  ${theme.font.body3}
  flex: 1;
  height: 15.5rem;
  padding: 1.6rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  resize: none;
`;

export const sendButtonStyle = css`
  ${theme.font.caption3}
  position: absolute;
  bottom: 1.6rem;
  right: 1.6rem;
  padding: 1.4rem 1.9rem;
  border-radius: 8px;
  color: ${theme.color.base.white};
  background-color: ${theme.color.point.hero};
`;

export const messageListStyle = css`
  flex: 1;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const messageBubbleStyle = (isMine: boolean) => css`
  ${theme.font.body2};
  align-self: ${isMine ? "flex-end" : "flex-start"};
  background-color: ${isMine ? theme.color.point.hero : theme.color.accent.blueBg};
  color: ${isMine ? theme.color.base.white : theme.color.base.black};
  border-radius: ${isMine ? "24px 4px 24px 24px" : "4px 24px 24px 24px"};

  display: inline-block;
  padding: 1rem 1.6rem;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const emptyMessageStyle = css`
  ${theme.font.title1}
  color:${theme.color.object.hero}
`;

export const messageWrapperStyle = (isMine: boolean) => css`
  display: flex;
  flex-direction: ${isMine ? "row-reverse" : "row"};
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 2.8rem;
`;

export const profileImageStyle = css`
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid ${theme.color.object.alternative};
  background-color: ${theme.color.point.ivory};
`;

export const nicknameTextStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
  width: 17rem;
`;

export const messageLineWrapperStyle = (isMine: boolean) => css`
  display: flex;
  align-items: flex-end;
  flex-direction: ${isMine ? "row-reverse" : "row"};
  gap: 0.6rem;
  margin-top: 0.4rem;
`;

export const timeTextStyle = css`
  ${theme.font.body1};
  color: ${theme.color.object.hero};
  white-space: nowrap;
`;

export const unreadBadgeStyle = css`
  ${theme.font.caption1}
  color: ${theme.color.base.white};
  background-color: ${theme.color.point.hero};
  border-radius: 16px;
  display: flex;
  width: 2.1rem;
  padding: 0.4rem 0.7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const dateDividerStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
  margin: 1.6rem 0;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 0.1rem;
    background-color: ${theme.color.object.assistive};
  }
`;


export const modalProfileStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
`;

export const modalProfileImageStyle = css`
  width: 6.4rem;
  height: 6.4rem;
`;

export const modalNicknameTextStyle = css`
  ${theme.font.title1};
  color: ${theme.color.point.hero};
`;


export const fileUploadContainer = css`
  display: flex;
  padding: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;

  background: ${theme.color.object.alternative};
  border-radius: 12px;
`;

export const fileUploadText = css`
  ${theme.font.body3};
`;

export const fileUploadButton = css`
  ${theme.font.caption2};
  background: ${theme.color.point.hero};
  border-radius: 32px;
  color: ${theme.color.base.white};
  display: flex;
  padding: 1.1rem 1.6rem;
  justify-content: center;
  align-items: center;
`;