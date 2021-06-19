import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getUsers } from './redux/middleware/axios';
import ModalUser from './components/ModalUser';

function App() {
	const show = useSelector((state) => state.store.modal);
	const user = useSelector((state) => state.store.user);
	const users = useSelector((state) => state.store.users);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
	return (
		<Container className="App">
			<br />
			<UserForm submitForm={true} modal={show} />
			<br />
			<UserList users={users} />

			{show && <ModalUser user={user} showModal={show} />}
		</Container>
	);
}

export default App;
