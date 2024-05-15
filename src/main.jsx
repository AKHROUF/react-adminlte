import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Portail from './composants/Portail.jsx';
import Users from './composants/Users.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts from './composants/Posts.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App  />,   },
  { path: "/portail", 
    element: <Portail />,
    children : [
      {path : "users", element : <Users />},
      {path : "posts", element : <Posts />}
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
