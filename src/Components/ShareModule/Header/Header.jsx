import React, { useState, useEffect } from "react";
import "./header.css";
import "./modal.css";
import Modal from "react-modal";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../../Redux/authSlice";
import {
  fetchProfileImage,
  reset_profilePhotoUrl,
} from "../../../Redux/profileSlice";
import { toast } from "react-toastify";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { profilePhotoUrl } = useSelector((state) => state.profile); // Profile Image extract from Store
  // console.log(profilePhotoUrl);

  // User name will show on the Header
  const [showingUsername, setShowingUsername] = useState("");
  const userName = localStorage.getItem("Firstname");

  // For opening profile photo by using modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Assing useDispatch and useNavigate hook into a variable
  const dispatch = useDispatch();

  // When Header component is rendered, then useEffect will call. It is for dispaly user name
  useEffect(() => {
    setShowingUsername(userName);
  }, [userName]);

  // When Header component is rendered, then useEffect will call. It is for dispaly user profile
  useEffect(() => {
    dispatch(fetchProfileImage());
    dispatch(reset_profilePhotoUrl());
  }, [isLoggedIn]);

  // Define Logout Function
  const logOut = () => {
    dispatch(handleLogout());
    toast.success("Logout successfully");
  };

  return (
    <>
      <header className="navbar_main">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                <img src="/Images/logo.png" alt="Logo" className="imgStyle" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item NavLi">
                    <NavLink to="/" className="nav-link " aria-current="page">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item NavLi">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item NavLi mx-auto">
                    <div className="dropdown dropDownNav ">
                      <button
                        className="btn dropdown-toggle nav-link NavLi"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Places
                      </button>
                      <ul
                        className="dropdown-menu text-center"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <NavLink
                            to="/addProducts"
                            className="dropdown-item regisLog text-capitalize"
                          >
                            Add New Place
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/showProducts"
                            className="dropdown-item regisLog text-capitalize"
                          >
                            Show Places
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item NavLi">
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <div className="nav-item active mx-5 pt-3 userStyle">
                  <div>
                    {isLoggedIn
                      ? profilePhotoUrl && (
                          <>
                            <img
                              className="profileImageStyle"
                              src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${profilePhotoUrl.profile_pic}`}
                              alt="ProfilePhoto"
                              onClick={toggleModal}
                              style={{ cursor: "pointer" }}
                            />
                            <Modal
                              isOpen={isModalOpen}
                              onRequestClose={toggleModal}
                              contentLabel="Profile Photo"
                              className="custom-modal"
                              overlayClassName="custom-modal-overlay"
                            >
                              <img
                                src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${profilePhotoUrl.profile_pic}`}
                                alt="ProfilePhoto"
                              />
                              <button onClick={toggleModal}>
                                <IoClose />
                              </button>
                            </Modal>
                          </>
                        )
                      : null}
                  </div>
                  {isLoggedIn ? <p> {showingUsername}</p> : null}
                </div>
                {/* Dropdown in Header */}
                <div className="dropdown dropDownNav">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser />
                  </button>
                  {/* <div> */}
                  <ul className="dropdown-menu">
                    {isLoggedIn ? (
                      <li>
                        <NavLink
                          to="/login"
                          className="dropdown-item regisLog"
                          onClick={logOut}
                        >
                          <RiLogoutCircleRLine />
                          <span className="lgot">Logout</span>
                        </NavLink>
                      </li>
                    ) : (
                      <>
                        <li>
                          <NavLink
                            to="/login"
                            className="dropdown-item regisLog"
                          >
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/registration"
                            className="dropdown-item regisLog"
                          >
                            Register
                          </NavLink>
                        </li>
                      </>
                    )}
                  </ul>
                  {/* </div> */}
                </div>
                {/* Dropdown in Header */}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
