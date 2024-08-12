import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deleteSession } from "../Redux/Action/ActionSession";

function LoginLink(props) {
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message);
      }
      localStorage.clear();

      const action = deleteSession("");
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="nav-item" onClick={logout}>
      <Link className="nav-link" to="/signin">
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
