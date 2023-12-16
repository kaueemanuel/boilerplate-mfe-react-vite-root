import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ExampleModuleScreen from './modules/example-module/screens/ScreenDefault'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExampleModuleScreen />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
