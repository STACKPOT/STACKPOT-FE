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

  main {
    min-height: calc(100vh - 58px);
    width: 908px;
    margin: 0 auto; 
  }
`;
