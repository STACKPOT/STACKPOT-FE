import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dialogStyles = {
  container: css`
    width: 100%;
    max-width: 45rem;
    background: ${theme.color.base.white};
    box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.13);
    border-radius: 2.4rem;
    flex-direction: column;
  `,
  header: css`
    width: 100%;
    padding: 1.6rem 2rem;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${theme.color.base.black};
    ${theme.font.title1};
    cursor: pointer;
  `,
  kakaoIcon: css`
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  `,
  body: css`
    align-items: center;
    padding: 1.6rem 2.4rem;
  `,
  footer: css`
    text-align: center;
    color: ${theme.color.object.assistive};
    ${theme.font.caption1};
    padding: 0 0 2.4rem 0;
  `,
  termsLink: css`
    color: ${theme.color.feedback.positive};
    text-decoration: underline;
    cursor: pointer;
  `,
};
