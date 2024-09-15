import React, { useState, useEffect } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitterSquare,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logIn, reset_login } from "../../Redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  // Extract the data (state) from the store
  const { redirectedToHome } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // For password toggle
  const [error, setError] = useState({}); // For Validation Errors

  // Destructure the User Data
  const { email, password } = userData;

  // Assing useDispatch and useNavigate hook into a variable
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define the function to handle the change of input fields
  const handleChange = (e) => {
    // Destructure name and value property from the event object
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Toggle Password
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Define the function of Validate Form
  const formValidation = (data) => {
    let validationsError = {};

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      validationsError.email = "Opps!! Email is required";
    } else if (!emailRegex.test(data.email)) {
      validationsError.email = "Invalid email";
    }

    // Password Validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!data.password.trim()) {
      validationsError.password = "Opps!! Password is required";
    } else if (!passwordRegex.test(data.password)) {
      validationsError.password = "Password does not match";
    }

    return validationsError;
  };

  // Define the Form submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collected user data from Login Form
    let logInData = {
      email: email,
      password: password,
    };

    // calling the "formValidation function" and store the result into a variable
    const validateErrors = formValidation(userData);
    // Checking Form validation
    if (Object.keys(validateErrors).length === 0) {
      dispatch(logIn(logInData));
      toast.success("Logged in successfully");
    } else {
      setError(validateErrors);
      toast.error("Something went wrong");
    }
  };

  // When login is Successful, then user will Redirected to Home Page
  const logInUser = () => {
    const token = localStorage.getItem("token");
    const logInSuccessful = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      logInSuccessful && navigate("/");
    }
  };

  // When Register Component will rendered then useEffect will call
  useEffect(() => {
    logInUser();
    dispatch(reset_login());
  }, [redirectedToHome]);
  return (
    <>
      <section className="logIn">
        <div className="container logInformStyle">
          <div className="register-form">
            <h2>Login your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                {/* <label htmlFor="email" className="form-label">
                Email
              </label> */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <small className="errStyle">{error.email}</small>
              </div>
              <div className="mb-4">
                {/* <label htmlFor="password" className="form-label">
                Password
              </label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                {/* Password Visibility */}
                <div className="passVis">
                  <i
                    className={
                      showPassword
                        ? "fas fa-eye-slash fasStyle"
                        : "fas fa-eye fasStyle"
                    }
                    onClick={togglePassword}
                  ></i>
                </div>
                <small className="errStyle">{error.password}</small>
              </div>
              <div className="btnStyle">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
              
              <p className="account-text">
                Don't have an account?
                <NavLink to="/registration">Registration</NavLink>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
