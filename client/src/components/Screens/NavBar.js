import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  return (
    // <Navbar bg="light" variant="light">
    //   <Container>
    //     <Navbar.Brand href="/">MERN Stack CRUD App</Navbar.Brand>
    //     <Nav className="me-auto navbar-fixed-top">
    //       <Nav.Link className="active">Home</Nav.Link>
    //       <Nav.Link>Post</Nav.Link>
    //       <Link to="/">Home</Link>
    //       <Link to="/post">Post</Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="memories.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            MERN Stack CRUD App
          </Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="1">
            <Nav.Item onClick={() => navigate("/")}>
              <Nav.Link eventKey="1">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => navigate("/post")}>
              <Nav.Link eventKey="2">Post</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
