import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return "";
  }

  return (
    <nav className="navbar">
      <Link to="/dashboard">
        <h2>Home</h2>
      </Link>
      <Link to="/dashboard">
        <h2>Taskify</h2>
      </Link>
      <Link to="/" onClick={() => dispatch(logout())}>
        <h2>Logout </h2>
      </Link>
    </nav>
  );
};

export default Navbar;
