import { css } from "@emotion/react";

export const globalStyles = css`
  html {
    font-size: 62.5%;
    font-family: "Pretendard", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input,
  textarea,
  select {
    font-family: inherit;
  }

  main {
    min-height: calc(100vh - 58px);
    width: 1100px;
    margin: 0 auto;
  }
`;
