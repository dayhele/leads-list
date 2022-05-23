import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    palette: {
    primary: string;
    lightBlue: string;
    veryLightBlue: string;
    black: string;
    lightGray: string;
    gray: string;
    white: string;
    shadow: string;
  },
  fonts: {
    primary: string;
    secondary: string;
  }
  }
}