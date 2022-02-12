import express, { Application, Request, Response } from 'express';
const usersRouter = express.Router();

usersRouter.get('/api/users', (req: Request, res: Response) => {
	res.json({ message: 'User Router Connected' });
});

export default usersRouter;
