import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalStyles = {
  container: css`
    width: 50rem;
    height: 30.4rem;
    background: ${theme.color.base.white};
    box-shadow: 0rem 0rem 0.1rem rgba(0, 0, 0, 0.04);
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 2.4rem;
    display: inline-flex;
    flex-direction: column;
  `,
  header: css`
    padding: 1.6rem 2.4rem;
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
  `,
  body: css`
    width: 50rem;
    height: 15rem;
    padding: 1.6rem 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  `,

  footer: css`
    width: 50rem;
    height: 9.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 1rem 0;
    gap: 3rem;
  `,

  button: (backgroundColor: string) => css`
    width: 19.4rem;
    height: 5rem;
    padding: 0.6rem 2.4rem;
    background: ${backgroundColor};
    color: ${theme.color.point.ivory};
    border-radius: 1.6rem;
    border: 0.1rem solid rgba(112, 115, 124, 0.2);
    ${theme.font.caption3};
    cursor: pointer;
  `,
};
