import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-navbar: #fcfcfc;
    --background-presentation: #f2f2f2;
    /* --background-about: #f2f2f2; */
    --background-work: #f2f2f2;

    --pink-dark: #d7707f;
    --pink-light: #e099a3;
    --grey-light: #4a4a4a;
    --ocean-green: #61c9a8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-presentation);
    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;

    min-height: 100%;
  }

  button {
    cursor: pointer;
  }

  // font-size: 16px (Desktop)
  html {
    height:100%;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`