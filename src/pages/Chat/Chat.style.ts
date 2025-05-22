import { css } from "@emotion/react";
import theme from "@styles/theme";

export const pageWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 84px 0;
`;

export const chatWrapperStyle = css`
  display: flex;
  width: 90%;
  max-width: 1100px;
  height: 830px;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const sidebarStyle = css`
  width: 310px;
`;

export const chatRoomTitleStyle = css`
  ${theme.font.title1}
  display: flex;
  height: 74px;
  padding: 16px 38px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.base.white};
`;

export const chatRoomListStyle = css`
  display: flex;
  flex-direction: column;
`;

export const chatRoomItemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 38px;
  transition: background-color 0.2s;

  border: 1px solid ${theme.color.object.alternative};
  border-radius: 8px;
`;

export const chatRoomIconStyle = css`
  // width: 32px;
  // height: 32px;
  // background-color: #dceeff;
  // border-radius: 6px;
`;

export const chatRoomInfoStyle = css`
`;

export const chatRoomNameStyle = css`
  ${theme.font.captionBold1}
`;

export const chatRoomTimeStyle = css`
  ${theme.font.captionBold1}
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
  border: 1px solid ${theme.color.object.alternative};
  background: ${theme.color.point.normal};
`;

export const chatRoomHeaderStyle = css`
  ${theme.font.title1}
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

export const placeholderIconStyle = css`
  width: 32px;
  height: 32px;
  background-color: #e6f1ff;
  border-radius: 50%;
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
  gap: 12px;
  overflow-y: auto;
`;

export const messageBubbleStyle = (isMine: boolean) => css`
  align-self: ${isMine ? "flex-end" : "flex-start"};
  background-color: ${isMine ? theme.color.point.hero : theme.color.accent.blueBg};
  color: ${isMine ? "#fff" : "#000"};
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 60%;
  font-size: 14px;
  word-break: break-word;
`;

export const emptyMessageStyle = css`
  ${theme.font.title1}
  color:${theme.color.object.hero}
`;
