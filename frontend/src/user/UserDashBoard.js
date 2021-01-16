import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
const ManageUserOrders = () => {
  return (
    <Base
      title="Your Profile"
      description="Change your password here!"
      className="container bg-white p-4 rounded"
    >
      {
        <Link to="/user/password-reset" className="btn btn-info rounded mb-3">
          Change Password
        </Link>
      }      
    </Base>
  );
};

export default ManageUserOrders;
