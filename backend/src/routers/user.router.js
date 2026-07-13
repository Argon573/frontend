import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = Router();
const userController = new UserController();


userRouter.post('/authorization', async (req, res) => {
    await userController.authorization(req, res);
})

export default userRouter;