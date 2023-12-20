import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import './lib/i18n.ts'
import { Global } from '@emotion/react'
import globalStyle from './globalStyles.ts'
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import theme from './theme.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeProviderEmotion theme={theme}>
      <ThemeProviderMUI theme={theme}>
        {children}
      </ThemeProviderMUI>
    </ThemeProviderEmotion>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
