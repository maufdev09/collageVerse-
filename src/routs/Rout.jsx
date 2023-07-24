import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../login/registration/Login";
import Registration from "../login/registration/Registration";
import Colleges from "../Pages/Colleges";
import Admission from "../Pages/Admission";
import Collage from "../Pages/Collage";
import Apply from "../Pages/Apply";
import PrivateRoutes from "./privateroute";
import Mycollage from "../Pages/Mycollage";

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
        },
        {
            path: "/register",
            element:<Registration></Registration>
        },
        {
            path: "/collages",
            element:<Colleges></Colleges>
        },
        {
            path: "/admissions",
            element:<Admission></Admission>
        },
        {
            path: "/collage/:id",
            element:<Collage></Collage>
        },
        {
            path: "/admission/:id",
            element:<PrivateRoutes><Apply></Apply></PrivateRoutes>
        },
        {
            path: "/mycollage",
            element:<PrivateRoutes><Mycollage></Mycollage></PrivateRoutes>
        },
      ],
    },
  ]);
  
  export default router;