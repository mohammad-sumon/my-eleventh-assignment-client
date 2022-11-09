import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, setUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
        console.error(error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand href="#home"><Link className="text-decoration-none text-dark" to="/">SAM Kitchen</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link className="text-decoration-none text-dark" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing"><Link className="text-decoration-none text-dark" to="/blogs">Blogs</Link></Nav.Link>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Link className="text-decoration-none text-dark" to="/myReviews">My Reviws</Link>
                  <Link className="text-decoration-none mx-2 text-dark" to="/addService">Add Service</Link>
                  <Button variant="primary" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link href="#pricing">
                    <Link className="text-decoration-none text-dark" to="/login">Login</Link>
                  </Nav.Link>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
