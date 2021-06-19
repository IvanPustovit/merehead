import axios from 'axios';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/middleware/axios';
import { BASE_URI } from '../constant';
import { show, userModal } from '../redux/sliceReducer';

const User = ({ user }) => {
	const dispatch = useDispatch();

	const deleteUser = async () => {
		try {
			await axios.delete(`${BASE_URI}/api/user/${user._id}`);
			dispatch(getUsers());
		} catch (error) {
			console.log(error);
		}
	};

	const editUser = () => {
		dispatch(userModal(user));
		dispatch(show());
	};

	return (
		<Card style={{ marginBottom: 10 }}>
			<Card.Img variant="top" src={user.avatar} style={{ width: 300 }} />
			<Card.Body>
				<Card.Title>{`${user.name} ${user.surname}`}</Card.Title>
				<Card.Text>{user.description}</Card.Text>
				<Button
					variant="primary"
					style={{ marginRight: '10px' }}
					onClick={editUser}
				>
					Edit
				</Button>

				<Button variant="danger" onClick={deleteUser}>
					Delete
				</Button>
			</Card.Body>
		</Card>
	);
};

export default User;
