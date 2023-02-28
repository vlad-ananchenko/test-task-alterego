import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import './i18next/i18n';

import CircleLoader from 'components/spinners/CircleLoader';
import { setupStore } from 'store/store';
import theme from 'theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense
            fallback={
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <CircleLoader />
              </Box>
            }
          >
            <App />
          </Suspense>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
