import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "./../Pages/Secret/Secret";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Layout/Dashboard";
import DashboardReservation from "../Pages/Dashboard/DashboardReservation/DashboardReservation";
import DashboardCart from "../Pages/Dashboard/DashBoardCart/DashBoardCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:item",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <ProtectedRoute>
            <Secret></Secret>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <DashboardCart></DashboardCart>
          </ProtectedRoute>
        ),
      },
      {
        path: "reservation",
        element: <DashboardReservation></DashboardReservation>,
      },
    ],
  },
]);

export default router;
