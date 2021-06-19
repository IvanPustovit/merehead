const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const connectDB = require('./utils/connectDB');
require('dotenv').config();

const userRouter = require('./routes/user.route');

const app = express();

app.use(express.json());
app.use(fileUpload({}));

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:5000', 'http://localhost:3000'],
		optionsSuccessStatus: 200,
	})
);

app.use(express.static('static'));
app.use(express.static('files'));

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use('/api', userRouter);

const start = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
