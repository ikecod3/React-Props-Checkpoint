import { Navbar, Container } from "react-bootstrap";

// import React from 'react'

const NavBar = () => {
  return (
    <div
      className="mb-5"
      style={{
        backgroundColor: "cornsilk",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFDkgGGGVc1Dsl0spooaItxP46N-bPnsePA&usqp=CAU"
              alt="nav-logo"
              className="d-inline-block align-center"
              style={{ height: 90 }}
            />
          </Navbar.Brand>
          <h2>FIFA Star Player Card</h2>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
