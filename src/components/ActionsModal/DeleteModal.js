import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ showModal, hideModal, confirmModal, id }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body><div>Are you sure you want to delete this item?</div></Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => confirmModal(id)}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={hideModal}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;