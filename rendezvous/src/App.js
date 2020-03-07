import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationFramework from './Components/NavigationFramework'

// muiTheme -> specifies the color of the components, darkness of the surfaces, etc.
// here we set our primary and secondary color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6ea0ff',
    },
    secondary: {
      main: '#6ea0ff',
    },
  },

});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavigationFramework />
    </MuiThemeProvider>
  );
}

export default App;
