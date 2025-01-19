import express from 'express';
import cors from 'cors';
import { itemsRoutes } from './routes/itemsRoutes';

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  }));
app.use(express.json());

// Rutas
app.use('/api/items', itemsRoutes);

// Middleware de error
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Internal Server Error' });
});

export default app;
