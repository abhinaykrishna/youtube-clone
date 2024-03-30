import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default App;
