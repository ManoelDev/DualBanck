import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }

  body {

    height: 100vh;
    background: #FAFAFA;
    color: #172765;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lato', serif;
    font-size: 16px;
  }



  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
