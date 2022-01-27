import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@xstyled/styled-components';
import mainTheme from './theme/mainTheme';
import ResetStyles from './theme/resetStyles';
import MainStyle from './theme/mainStyle';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <ThemeProvider theme={mainTheme}>
          <ResetStyles />
          <MainStyle />
          <App />
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
