import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white text-center">
          Admin Navigation
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create a Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-success">
              Manage Categories
            </Link>
          </li>

          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              Add New Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to Admin area!"
      description="Manage all of your products here"
      className="container-fluid "
    >
      <div className="col-md-6 offset-sm-3 text-center mb-2">
        {adminLeftSide()}
      </div>
    </Base>
  );
};

export default AdminDashboard;
