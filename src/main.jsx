import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NotFound from './components/NotFound/NotFound.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
      path: '/',
      element: <App />, 
      children: [
          {
              path: '',
              element: <Home />, 
          },
          {
              path: '*',
              element: <NotFound />, 
          },
      ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
   
)
