import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExampleModuleScreen from './screens/ScreenDefault'
import Header from './components/Header/Header'

// @ts-ignore
import RemoteApp from 'remote-mfe/App';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <ExampleModuleScreen />
          </>
        } />
        <Route path='/remote/*' element={
          <>
            <Header />
            <RemoteApp />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
