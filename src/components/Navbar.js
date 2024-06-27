import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <h2>User List</h2>
        </Navbar.Brand>

        <SearchBar onSearch={onSearch} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
