import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../image/logo.svg";

export function NavBar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
    // Perform any additional logic based on the selected tab index
  };

  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          DSA Visualizer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#"
              active={activeTab === 0}
              onClick={() => handleTabChange(0)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              active={activeTab === 1}
              onClick={() => handleTabChange(1)}
            >
              Sorting
            </Nav.Link>
            <Nav.Link
              href="#"
              active={activeTab === 2}
              onClick={() => handleTabChange(2)}
            >
              Searching
            </Nav.Link>
            <Nav.Link
              href="#"
              active={activeTab === 3}
              onClick={() => handleTabChange(3)}
            >
              Data Structure
            </Nav.Link>
            <Nav.Link
              href="#"
              active={activeTab === 4}
              onClick={() => handleTabChange(4)}
            >
              Others
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
