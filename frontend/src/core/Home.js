import React from "react";
import "../styles.css";
import Base from "../core/Base";
import logo from "../assets/logo.png";


const Home = () => {
  


  return (
    <Base title="" description="">
      <div className="d-flex justify-content-center m-5">
        <img src={logo} className="d-inline-block w-25 mx-auto"></img>
      </div>
      <div className="container">
        <h3 className="text-dark text-center m-4">About Us</h3>
      </div>
    </Base>
  );
};

export default Home;
