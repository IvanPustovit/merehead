import { createSlice } from '@reduxjs/toolkit';

const sliceReducer = createSlice({
	name: 'store',
	initialState: {
		users: [],
		modal: false,
		user: { name: '', surname: '', description: '', avatar: '' },
	},
	reducers: {
		usersGet(state, { payload }) {
			state.users = payload;
		},
		show(state) {
			state.modal = !state.modal;
		},
		userModal(state, { payload }) {
			state.user = payload;
		},
		userInitial(state, { payload }) {
			state.user = { name: '', surname: '', description: '', avatar: '' };
		},
	},
});

export default sliceReducer.reducer;
export const { usersGet, show, userModal, userInitial } = sliceReducer.actions;
