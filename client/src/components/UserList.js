import React, { useEffect, useState } from 'react';
import { ListGroup, Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import User from './User';

const UserList = ({ users }) => {
	const dispatch = useDispatch();
	const [displayUser, setDisplayUser] = useState([]);
	const [active, setActive] = useState(1);

	let items = [];
	let pageLimit = 5;
	let offset = (active - 1) * pageLimit;

	const pageClick = (e) => {
		setActive(+e.target.text);
		// eslint-disable-next-line no-restricted-globals
		scrollTo(0, 0);
	};

	for (let number = 1; number <= Math.ceil(users.length / 5); number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === active}
				onClick={pageClick}
			>
				{number}
			</Pagination.Item>
		);
	}
	useEffect(() => {
		if (users.length > 0) {
			setDisplayUser(users.slice(offset, offset + pageLimit));
		}
	}, [active, dispatch, offset, pageLimit, users]);
	return (
		<>
			<ListGroup>
				{displayUser &&
					displayUser.map((el) => <User user={el} key={el._id} />)}
			</ListGroup>
			<br />
			<Pagination style={{ justifyContent: 'center' }}>{items}</Pagination>
		</>
	);
};

export default UserList;
