import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: ${(props) => props.theme.fonts.primary};
   }

   html {
    position: relative;
    min-height: 100%;
   }

   body {
       height: 100vh;
   }

   .App {
       display: flex;
       flex-direction: column;
       justify-content: space-between;
   }

   #root, .App {
       height: 100%;
   }
`;
