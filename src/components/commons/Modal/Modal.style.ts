import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalStyles = {
  container: css`
    width: 54rem;
    padding: 3.2rem;
    background: ${theme.color.base.white};
    box-shadow: 0rem 0rem 0.1rem rgba(0, 0, 0, 0.04);
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 2.4rem;
    display: inline-flex;
    flex-direction: column;
  `,
  header: css`
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
  `,
  body: css`
    width: 47.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  `,

  footer: css`
    margin-top: 1.6rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
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
