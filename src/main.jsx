import React from 'react'
import ReactDOM from 'react-dom/client'
import {
 
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routs/Rout.jsx';
import AuthProviders from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <Toaster></Toaster>

    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
