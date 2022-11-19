import React from "react";
import { createRoot } from "react-dom/client";
import './styles/style.scss'

import App from './components/App'
import {
   createBrowserRouter,
   RouterProvider,
   Link,
   useNavigate
} from 'react-router-dom'


const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   }
]);

const rootElement = document.getElementById('app');

const root = createRoot(rootElement)
root.render(
   <RouterProvider router={router} />
)