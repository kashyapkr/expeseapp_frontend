import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root {
    --primary-color: #222260;
    --primary-color2: rgba(34, 34, 96, 0.6);
    --primary-color3: rgba(34, 34, 96, 0.4);
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
    --color-dot: #f24747;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(0.8rem,  0.6vw, 1rem);
    /* overflow: hidden; */
    color: rgba(34, 34, 96, .6);
    
    
  }
  h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }
`;
