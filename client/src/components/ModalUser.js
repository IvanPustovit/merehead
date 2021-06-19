import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { show, userInitial } from '../redux/sliceReducer';
import UserForm from './UserForm';

const ModalUser = ({ user, showModal }) => {
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(show());
		dispatch(userInitial());
	};

	return (
		<Modal show={showModal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{`${user.name} ${user.surname}`}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<UserForm />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalUser;
