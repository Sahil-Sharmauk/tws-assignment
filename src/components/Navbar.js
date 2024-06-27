import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand className="mx-auto align-items-center">
          <h3 className="m-0">User List</h3>
        </Navbar.Brand>
        <div className="d-flex justify-content-center justify-content-sm-end flex-grow-1">
          <SearchBar onSearch={onSearch} />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
