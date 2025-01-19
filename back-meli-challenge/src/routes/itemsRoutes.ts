import { Router } from 'express';
import { searchItems, getItem } from '../controllers/itemsController';

export const itemsRoutes = Router();

itemsRoutes.get('/', searchItems);
itemsRoutes.get('/:id', getItem);
