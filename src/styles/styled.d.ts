import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    palette: {
    primary: string;
    lightBlue: string;
    black: string;
    lightGray: string;
    gray: string;
    white: string;
  },
  fonts: {
    primary: string;
    secondary: string;
  }
  }
}