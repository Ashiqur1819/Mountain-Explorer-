import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import AdventureDetails from "../components/AdventureDetails";
import ForgetPassword from "../components/ForgetPassword";
import DynamicTitle from "../components/DynamicTitle";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DynamicTitle></DynamicTitle>
        <Mainlayout></Mainlayout>
      </>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/my_profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/adventureDetails/:id",
        element: (
          <PrivateRoute>
            <AdventureDetails></AdventureDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/adventures.json");
          const adventures = await res.json();

          const adventure = adventures.find(
            (adventure) => adventure.id === params.id
          );
          return adventure;
        },
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
        path: "/forget_password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
