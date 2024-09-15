import React, { useState, useEffect } from "react";
import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitterSquare,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { register, reset_registration } from "../../Redux/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  // Extract the data (state) from the store
  const { redirectedToLogin } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [profilePic, setProfilePic] = useState({});
  const [showPassword, setShowPassword] = useState(false); // For password toggle
  const [error, setError] = useState({}); // For Validation Errors

  // Destructure the User Data
  const { firstName, lastName, email, password } = userData;

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

  // Define Funciton to handle the Profile Picture upload
  const handleProfilePic = (e) => {
    setProfilePic(e.target.files[0]);
  };

  // Define the function of Validate Form
  const formValidation = (data) => {
    let validationsError = {};

    // FirstName Validation
    if (!data.firstName.trim()) {
      validationsError.firstName = "Opps!! First name is required";
    } else if (!(data.firstName.trim().length > 3)) {
      validationsError.firstName = "First name must be 4 characters long";
    }
    // LastName Validation
    if (!data.lastName.trim()) {
      validationsError.lastName = "Opps!! Last name is required";
    }

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
      validationsError.password =
        "Password must between 8 to 15 characters, one lowercase letter,one uppercase letter,one numeric digit and one special character";
    }

    return validationsError;
  };

  // Define the Form submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collected user data from Registration Form
    let formData = new FormData();
    // FormData() object Key should be writtern as backend key like "first_name"
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profile_pic", profilePic);

    // calling the "formValidation function" and store the result into a variable
    const validateErrors = formValidation(userData);
    // Checking Form validation
    if (Object.keys(validateErrors).length === 0) {
      toast.success("Acount Created Successfully");
      dispatch(register(formData));
    } else {
      setError(validateErrors);
      toast.error("Something went wrong");
    }
  };

  // When Registration is Successful, then user will Redirected to Login Page
  const registerUser = () => {
    const FIRSTNAME = localStorage.getItem("firstName");
    const LASTNAME = localStorage.getItem("lastName");
    const isRegistrationSuccessful =
      window.location.pathname.toLowerCase() === "/registration";

    if (
      FIRSTNAME &&
      LASTNAME !== null &&
      FIRSTNAME &&
      LASTNAME !== undefined &&
      FIRSTNAME &&
      LASTNAME !== ""
    ) {
      isRegistrationSuccessful && navigate("/login");
    }
  };

  // When Register Component will rendered then useEffect will call
  useEffect(() => {
    registerUser();
    dispatch(reset_registration()); // call the reset_registration action
  }, [redirectedToLogin]);

  return (
    <>
      <section className="formSection">
        <div className="container formStyle">
          <div className="register-form">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control inputFieldStyle"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="First name"
                  onChange={handleChange}
                />
                <small className="errStyle">{error.firstName}</small>
              </div>
              <div className="mb-4">
                {/* <label htmlFor="lastName" className="form-label">
                Last Name
              </label> */}
                <input
                  type="text"
                  className="form-control inputStyle"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  placeholder="Last name"
                  onChange={handleChange}
                />
                <small className="errStyle">{error.lastName}</small>
              </div>
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
              <div className="mb-4">
                {/* <label htmlFor="profilePicture" className="form-label">
                Profile Picture
              </label> */}
                <input
                  type="file"
                  className="form-control"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleProfilePic}
                />
              </div>
              <div className="btnStyle">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>
              
              <p className="account-text">
                Already have an account? <NavLink to="/login">Login</NavLink>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
