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
import Admin from "./../Pages/Dashboard/Admin/Admin/Admin";
import DashboardCart from "./../Pages/Dashboard/DashboardCart/DashboardCart";
import AdminRoute from "./AdminRoute";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers/AdminUsers";
import AdminAddItem from "../Pages/Dashboard/Admin/AdminAddItem/AdminAddItem";

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
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "cart",
        element: <DashboardCart></DashboardCart>,
      },
      {
        path: "reservation",
        element: <DashboardReservation></DashboardReservation>,
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Admin></Admin>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AdminUsers></AdminUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AdminAddItem></AdminAddItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
