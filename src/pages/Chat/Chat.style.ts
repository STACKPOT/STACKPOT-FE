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
  // border: 1px solid ${theme.color.object.alternative};
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
  gap: 16px;
  padding: 16px 38px;
  transition: background-color 0.2s;
  // border: 1px solid ${theme.color.object.alternative};
  background-color: ${isSelected ? "#eef6ff" : "transparent"};
`;

export const chatRoomInfoStyle = css`
  align-items: center;
  align-self: stretch;
  flexDirection: column;
`;

export const chatRoomNameTimeWrapperStyle = css`
  ${theme.font.captionBold1}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const chatRoomNameStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  text-align: center;
`;

export const chatRoomTimeStyle = css`
  color: ${theme.color.object.hero};
`;

export const chatRoomDescStyle = css`
  ${theme.font.body1}
`;

export const chatMainStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const chatTopBarStyle = css`
  display: flex;
  height: 74px;
  padding: 16px 38px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 0px 8px 8px 0px;
  // border: 1px solid ${theme.color.object.alternative};
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
  max-width: 220px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  gap: 8px;
  color: #888;
  font-size: 15px;
`;

export const inputContainerStyle = css`
  position: relative;
  display: flex;
  background-color: #fff;
`;

export const textAreaStyle = css`
  ${theme.font.body3}
  flex: 1;
  height: 155px;
  padding: 16px;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  resize: none;
`;

export const sendButtonStyle = css`
  ${theme.font.caption3}
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 14px 19px;
  border-radius: 8px;
  color: ${theme.color.base.white};
  background-color: ${theme.color.point.hero};
`;

export const messageListStyle = css`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  overflow-y: auto;
`;

export const messageBubbleStyle = (isMine: boolean) => css`
  align-self: ${isMine ? "flex-end" : "flex-start"};
  background-color: ${isMine ? theme.color.point.hero : theme.color.accent.blueBg};
  color: ${isMine ? theme.color.base.white : theme.color.base.black};
  border-radius: ${isMine ? "24px 4px 24px 24px" : "4px 24px 24px 24px"};

  display: inline-block;
  max-width: 400px;
  padding: 10px 16px;
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
  gap: 8px;
`;

export const profileImageStyle = css`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid ${theme.color.object.alternative};
  background-color: ${theme.color.point.ivory};
`;

export const nicknameTextStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
  width: 170px;
`;

export const messageLineWrapperStyle = (isMine: boolean) => css`
  display: flex;
  align-items: flex-end;
  flex-direction: ${isMine ? "row-reverse" : "row"};
  gap: 6px;
  margin-top: 4px;
`;

export const timeTextStyle = css`
  font-size: 12px;
  color: #aaa;
  white-space: nowrap;
`;

export const unreadBadgeStyle = css`
  ${theme.font.caption1}
  color: ${theme.color.base.white};
  background-color: ${theme.color.point.hero};
  border-radius: 16px;
  display: flex;
  width: 21px;
  padding: 4px 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const dateDividerStyle = css`
  ${theme.font.body2}
  color: ${theme.color.object.hero};
  margin: 1.6rem 0;
  display: flex;
  align-items: center;
  gap: 16px;

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
  gap: 8px;
  align-self: stretch;
`;

export const modalProfileImageStyle = css`
  width: 64px;
  height: 64px;
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
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
`;