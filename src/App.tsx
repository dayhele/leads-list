import React from 'react';
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/themes/theme";
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header/>
        <List/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
