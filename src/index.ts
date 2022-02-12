// Depencencies and Initializers
import express, { Application, Request, Response } from 'express';
const server: Application = express();
import usersRouter from './routes/users';

// Routes
server.use('/api/users', usersRouter);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req: Request, res: Response) => {
	res.status(200).json({ message: 'Welcome to the API' });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
