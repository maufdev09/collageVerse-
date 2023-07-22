import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../login/registration/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/login",
            element:<Login></Login>,
        }
      ],
    },
  ]);
  
  export default router;