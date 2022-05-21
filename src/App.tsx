import React from 'react';
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/themes/theme";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header></Header>
    </ThemeProvider>
    </div>
  );
}

export default App;
