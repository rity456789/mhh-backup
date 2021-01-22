import React from "react";
import { withRouter, NavLink } from "react-router-dom";

function Header() {
  const isLoginned = localStorage.getItem("token") === (('undefined')|| (null)) ? false : true;
  return (
    <>
    {
      console.log("okela", localStorage.getItem("token"))
    }
      <div>
        {/* <div className="loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* Main navigation */}
        <nav className="navbar navbar-expand-lg navbar-sticky navbar-dark dark">
          <div className="container">
            {/* Logo */}
            <NavLink to="/" className="navbar-brand mr-1">
              <img src="assets/svg/reveal-logo.svg" alt="" />
            </NavLink>
            {/* Checkout & profile */}
            {isLoginned ? (
              <div className="d-flex align-items-center">
                <NavLink
                  to="my-shop"
                  className="btn btn-sm btn-primary btn-rounded ml-lg-4 px-3"
                >
                  <i className="icon icon-book" /> My shop
                </NavLink>
                <NavLink
                  to="check-out"
                  className="btn btn-sm btn-primary btn-rounded ml-lg-4 px-3"
                >
                  <i className="icon icon-cart" /> Check out
                </NavLink>
                <NavLink
                  to="profile"
                  className="btn btn-sm btn-primary btn-rounded ml-lg-4 px-3"
                >
                  <i className="icon icon-users" /> Profile
                </NavLink>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <NavLink
                  to="login"
                  className="btn btn-sm btn-primary btn-rounded ml-lg-4 px-3"
                >
                  Log in
                </NavLink>
              </div>
            )}
          </div>
        </nav>
        {/* Breadcrumbs */}
      </div>
    </>
  );
}

export default Header;
