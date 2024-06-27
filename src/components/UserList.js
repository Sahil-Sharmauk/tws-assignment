import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const UserList = ({ children, users }) => {
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name{children}</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>
              <Link to={`/user/${user.id}`}>
                <FontAwesomeIcon icon={faEye} />

              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
