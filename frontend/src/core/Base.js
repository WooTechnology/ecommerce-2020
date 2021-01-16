import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "",
  children
}) => (
  <div>
    <Menu />
    <div className="container">
      <div className="text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    
    <footer className="page-footer font-small bg-dark">
      <div className="row p-4">
        <div className="col-sm-4 text-white">
          <u>Address:</u> <br></br><br></br>
          ABC Colony,<br></br>123, Street no 78,<br></br>Mumbai,<br></br> Maharashtra
        </div>
        <div className="col-sm-4 text-white text-center mt-5 mb-5">
        © 2020 Copyright: Ecommerce<br></br>
        Developed by <a href="https://github.com/RakshitRiya" className="text-white"><i>Riya</i></a> 
        </div>
        <div className="col-sm-4 text-white text-right">
          <u>Connect us with</u><br></br><br></br>
            <a href="" className="text-white"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="text-white"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="text-white"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a> <br></br><br></br>
            Also visit us at: <a href="" className="text-white"><b>Amazon</b></a><br></br>
            Call us at: <i>1234567890</i>
        </div>

      </div>
    </footer>
    </div>
);

export default Base;
