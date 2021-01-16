import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import { Navbar, Nav } from "react-bootstrap";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2CD47D" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand style={currentTab(history, "/")} href="/" title="Home">
        <i class="fa fa-home" aria-hidden="true"></i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            style={currentTab(history, "/ourproducts")}
            href="/ourproducts"
          >
           <b>Products&nbsp;&nbsp;</b>
          </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link style={currentTab(history, "/cart")} href="/cart" title="Cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;
          </Nav.Link>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <Nav.Link
              style={currentTab(history, "/user/dashboard")}
              href="/user/dashboard" title="Your Profile"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </Nav.Link>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <Nav.Link
              style={currentTab(history, "/admin/dashboard")}
              href="/admin/dashboard" title="Admin Profile"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </Nav.Link>
          )}
          {!isAuthenticated() && (
            <Fragment>
              <Nav.Link style={currentTab(history, "/signin")} href="/signin" title="Signin">
              <i class="fa fa-sign-in" aria-hidden="true"></i>
              </Nav.Link>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Nav.Link
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}title="SignOut"
            >
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Menu);
