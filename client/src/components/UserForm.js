import axios from 'axios';
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URI } from '../constant';
import { getUsers } from '../redux/middleware/axios';
import { show, userInitial } from '../redux/sliceReducer';

const UserForm = () => {
	const initialState = useSelector((state) => state.store.user);
	const modal = useSelector((state) => state.store.modal);

	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const changeHandler = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const submit = async (e) => {
		try {
			e.preventDefault();
			await axios.post(`${BASE_URI}/api/users`, form);
			dispatch(getUsers());
			dispatch(userInitial);
			setForm(initialState);
		} catch (error) {
			console.log(error);
		}
	};

	const update = async (e) => {
		try {
			e.preventDefault();
			await axios.put(`${BASE_URI}/api/user/${initialState._id}`, form);
			dispatch(getUsers());
			dispatch(show());
			dispatch(userInitial);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Form>
				<Row>
					<Col>
						<Form.Control
							placeholder="User name"
							name="name"
							value={form.name}
							onChange={(e) => changeHandler(e)}
						/>
					</Col>
					<Col>
						<Form.Control
							placeholder="User surname"
							name="surname"
							value={form.surname}
							onChange={(e) => changeHandler(e)}
						/>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<Form.Control
							placeholder="User description"
							as="textarea"
							rows={3}
							name="description"
							value={form.description}
							onChange={(e) => changeHandler(e)}
						/>
					</Col>
					<Col>
						<Form.Control
							placeholder="User avatar"
							name="avatar"
							value={form.avatar}
							onChange={(e) => changeHandler(e)}
						/>
					</Col>
				</Row>
				<br />
				{!modal && (
					<Button type="submit" onClick={submit}>
						Submit
					</Button>
				)}
				{modal && (
					<Button type="submit" onClick={update}>
						Submit
					</Button>
				)}
			</Form>
		</>
	);
};

export default UserForm;
