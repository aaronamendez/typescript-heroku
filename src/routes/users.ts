import express, { Request, Response, Router } from 'express';
const usersRouter: Router = express.Router();

usersRouter.get('/', (req: Request, res: Response) => {
	res.json({ message: 'User Router Connected' });
});

export default usersRouter;
