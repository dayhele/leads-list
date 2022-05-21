import {createGlobalStyle} from 'styled-components'
// import 'font-awesome/css/font-awesome.min.css';

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       background-color: ${(props) => props.theme.palette.white};
       font-family: ${(props) => props.theme.fonts.primary};
   }
`