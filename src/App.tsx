import { BrowserRouter, Routes, Route } from "react-router-dom"
import ExampleModuleScreen from "./screens/ScreenDefault"
import Header from "./components/Header/Header"
import { Suspense, lazy } from "react"

const RemoteApp = lazy(() => import("remote-mfe/App"))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ExampleModuleScreen />
            </>
          }
        />
        <Route
          path="/remote/*"
          element={
            <>
              <Suspense>
                <Header />
                <RemoteApp />
              </Suspense>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
