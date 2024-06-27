import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand href="#" className="mx-auto mx-lg-0">
          <h2 className="brand-title">User List</h2>
        </Navbar.Brand>
        <div className="d-flex justify-content-center justify-content-md-end flex-grow-1">
          <SearchBar onSearch={onSearch} />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
