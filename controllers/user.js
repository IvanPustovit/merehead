const User = require('../models/User');
const getUser = async (req, res) => {
	try {
		const users = await User.find();
		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Server Error' });
	}
};

const addUser = async (req, res) => {
	try {
		const { name, surname, description, avatar } = req.body;
		const user = new User({ name, surname, description, avatar });
		await user.save();
		return res.status(201).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Server Error' });
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const candidate = await User.findById(id);
		if (!candidate) {
			return res.status(400).json({ message: 'user not found' });
		}
		const user = await User.findByIdAndUpdate(id, req.body, { new: true });
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Server Error' });
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		res.status(200).json({ message: 'User deleted' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Server Error' });
	}
};
module.exports = { getUser, addUser, updateUser, deleteUser };
