import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ActionsModal.css"

const EditModal = ({ showModal, hideModal, confirmModal, id, name }) => {
    const [newName, setNewName] = useState(name)


    return (
        <Modal show={showModal} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Province Name</Modal.Title>
            </Modal.Header>
            <Modal.Body className="inputName"><input type="text" defaultValue={name} onChange={(e) => setNewName(e.target.value)}></input></Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => confirmModal(id, newName)}>
                    Save
                </Button>
                <Button variant="secondary" onClick={hideModal}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal;