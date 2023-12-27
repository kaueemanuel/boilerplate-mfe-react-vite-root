import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { CssBaseline } from "boilerplate-ui-mui-storybook/material"
import "./lib/i18n.ts"
import { Global } from "@emotion/react"
import globalStyle from "./globalStyles.ts"
import { ThemeProvider } from "boilerplate-ui-mui-storybook/themes"
import theme from "./theme.tsx"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.lightTheme}>
      <CssBaseline />
      <Global styles={globalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
