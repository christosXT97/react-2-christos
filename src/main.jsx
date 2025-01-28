import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieListPage from './components/MovieListPage.jsx'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "MovieListPage",
    element: <MovieListPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <nav>
        <Link to="/">Main Page</Link>
        <Link to="MovieListPage">Movie table</Link>

      </nav>
    </RouterProvider>
  </StrictMode>
);