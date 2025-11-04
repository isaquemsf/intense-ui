import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { theme } from './styles/theme.js';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { Toaster } from 'react-hot-toast';

const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: #FEF9F4; // Cor de fundo
  background-image: url('/svgs/assets-composition.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 950px;
  opacity: 0.05;
  background-attachment: fixed;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <FixedBackground />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            error: {
              style: {
                background: theme.colors.pink,
                color: theme.colors.white,
                fontFamily: theme.fonts.primary,
                fontWeight: '500',
              },
            },
          }}
        />

        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);