import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import About from '../pages/About/About';
import CallToAction from '../pages/CallToAction/CallToAction';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
      },
      {
        path: '/contact',
        element: <CallToAction></CallToAction>,
      },
    ],
  },
]);
export default router;
