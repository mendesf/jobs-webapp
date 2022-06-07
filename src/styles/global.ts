import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F ;
    --text-body: #969CB2;
    --background: #F0F2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    --wekit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    max-width: 750px;
    margin: 0 auto;
    position: absolute;
    inset: 2rem;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 0.25rem;
    outline: none;
    padding: 1.5rem;
    line-height: 2rem;


    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 1rem;
      }

      button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        margin-left: auto;
        margin-bottom: 1rem;

        transition: filter 0.2s;
      }

    &:hover {
      filter: brightness(0.9);
    }
  }

    img {
      max-width: 100%;
    }

    ul {
      list-style-type: none;
    }
  }
`;
