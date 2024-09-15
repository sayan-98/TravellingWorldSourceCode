import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../Components/Spinner/Spinner";
import Header from "../Components/ShareModule/Header/Header";
import Footer from "../Components/ShareModule/Footer/Footer";
import { check_token, check_name } from "../Redux/authSlice";
const Home = lazy(() => import("../Components/Home/Home"));
const AddProducts = lazy(() => import("../Components/Product/AddProducts"));
const ShowProduct = lazy(() => import("../Components/Product/ShowProduct"));
const About = lazy(() => import("../Components/About/About"));
const Contact = lazy(() => import("../Components/Contact/Contact"));
const Register = lazy(() => import("../Components/Register/Register"));
const Login = lazy(() => import("../Components/Login/Login"));
const EditProduct = lazy(() => import("../Components/Product/EditProduct"));

const Rout = () => {
  const dispatch = useDispatch();

  const publicRoutesNames = [
    {
      path: "/registration",
      component: <Register />,
    },
    {
      path: "/login",
      component: <Login />,
    },
  ];

  const privateRoutesNames = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/addProducts",
      component: <AddProducts />,
    },
    {
      path: "/showProducts",
      component: <ShowProduct />,
    },
    {
      path: "/about",
      component: <About />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },
    {
      path: "/edit/:id",
      component: <EditProduct />,
    },
  ];

  useEffect(() => {
    dispatch(check_token());
    dispatch(check_name());
  }, [dispatch]);

  const PrivateRoute = ({ children }) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  };
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Header />
          <Routes>
            {publicRoutesNames.map((route, index) => {
              return (
                <Route
                  key={index + 1}
                  path={route.path}
                  element={route.component}
                  exact
                />
              );
            })}
            {privateRoutesNames.map((route, index) => {
              return (
                <Route
                  key={index + 2}
                  path={route.path}
                  element={<PrivateRoute>{route.component}</PrivateRoute>}
                />
              );
            })}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
};

export default Rout;
