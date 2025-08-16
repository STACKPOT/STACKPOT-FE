import { css } from "@emotion/react";
import theme from "@styles/theme";

export const headerStyle = (isHomePage: boolean) => css`
  padding: 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${isHomePage
    ? theme.color.point.darkblue
    : theme.color.point.ivory};
  border-bottom: 1px solid
    ${isHomePage ? theme.color.point.darkblue : theme.color.object.alternative};
`;

export const searchIconStyle = (isHomePage: boolean) => css`
  color: ${isHomePage ? theme.color.point.yellow : theme.color.object.hero};
  cursor: pointer;
`;

export const iconContainer = css`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

export const logoStyle = (isHomePage: boolean) => css`
  color: ${isHomePage ? theme.color.point.yellow : theme.color.point.gray};
`;

export const profileStyle = css`
  width: 4rem;
  border: 1px solid ${theme.color.object.alternative};
  border-radius: 50%;
`;

export const guestProfileStyle = css`
  width: 4rem;
  margin-right: 3.2rem;
`;

export const profileContainer = css`
  position: relative;
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const iconStyle = (isHomePage: boolean) => css`
  cursor: pointer;
  color: ${isHomePage
    ? theme.color.point.yellow
    : theme.color.interactive.inactive};
`;

export const bellContainer = css`
  position: relative;
`;

export const ProfileStyle = css`
  height: 4rem;
  width: 4rem;
`;
