import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const UserModal = ({ user, show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td><strong>Username:</strong></td>
                            <td>{user?.username}</td>
                        </tr>
                        <tr>
                            <td><strong>Email:</strong></td>
                            <td>{user?.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Phone:</strong></td>
                            <td>{user?.phone}</td>
                        </tr>
                        <tr>
                            <td><strong>Website:</strong></td>
                            <td>{user?.website}</td>
                        </tr>
                        <tr>
                            <td><strong>Address:</strong></td>
                            <td>{user?.address ? `${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city}, ${user?.address?.zipcode}` : '-'}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    );
};

export default UserModal;
