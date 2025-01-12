import { css } from "@emotion/react";
import theme from "@styles/theme";

export const modalStyles = {
  container: css`
    width: 100%;
    max-width: 45rem;
    background: ${theme.color.base.white};
    box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.13);
    border-radius: 2.4rem;
    display: flex;
    flex-direction: column;
  `,
  header: css`
    width: 100%;
    padding: 1.6rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  title: css`
    color: ${theme.color.base.black};
    ${theme.font.title1};
  `,
  closeIcon: css`
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  body: css`
    width: 100%;
    padding: 6.2rem 2.4rem;
    text-align: center;
    color: ${theme.color.object.assistive};
    ${theme.font.caption3};
  `,

  footer: css`
    height: 6.4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    gap: 1.6rem;
    border-top: 0.1rem solid ${theme.color.border.normal};
  `,

  button: css`
    width: 20.3rem;
    background: none;
    border: none;
    ${theme.font.caption3};
    cursor: pointer;
  `,
};
