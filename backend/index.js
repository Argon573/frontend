import express from 'express';
import userRouter from './src/routers/user.router.js';
import cors from 'cors';

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(cors()); // TODO убрать, онли под разработку

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

