// Depencencies and Initializers
import express, { Application } from 'express';
const server: Application = express();
import usersRouter from './routes/users';

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use('/api/users', usersRouter);

server.use((req, res) => {
	res.json({ message: 'OK!' });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
