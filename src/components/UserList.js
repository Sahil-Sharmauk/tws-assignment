import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import UserModal from "./UserModal";

const UserList = ({ children, users }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Table
        striped
        bordered
        hover
        style={{ maxWidth: "90vw", margin: "auto"}}
        className='mt-5'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name {children}</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{`${user?.firstname} ${user?.lastname}`} </td>
              <td>{user?.login?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.address?.city}</td>
              <td>
                <Button variant="primary" onClick={() => handleShowModal(user)}>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UserModal
        user={selectedUser}
        show={showModal}
        onHide={handleCloseModal}
      />
    </>
  );
};

export default UserList;
