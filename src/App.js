import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './i18n';
import theme from 'theme';
import AppContainer from './containers/App';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
