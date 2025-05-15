import { css } from "@emotion/react";
import theme from "@styles/theme";

export const dialogStyles = {
  container: css`
    width: 51rem;
    height: 36rem;
    background: ${theme.color.base.white};
    box-shadow: 0rem 0rem 0.1rem rgba(0, 0, 0, 0.4);
    border: 1px solid ${theme.color.object.alternative};
    border-radius: 2.4rem;
    flex-direction: column;
  `,
  header: css`
    padding: 1.6rem 2rem;
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
  `,

  body: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    gap: 2.4rem;
  `,

  section: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
  `,

  termsLink: css`
    color: ${theme.color.feedback.positive};
    cursor: pointer;
    text-decoration: none;
  `,
};
