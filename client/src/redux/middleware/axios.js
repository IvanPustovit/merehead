import axios from 'axios';
import { usersGet } from '../sliceReducer';
import { BASE_URI } from '../../constant';

export const getUsers = (payload) => async (dispatch) => {
	try {
		const response = await axios.get(`${BASE_URI}/api/users`);
		dispatch(usersGet(response.data));
	} catch (error) {
		console.log(error);
	}
};
