import { Request, Response } from 'express';
import { getItems, getItemDetail } from '../services/itemsService';

export const searchItems = async (req: Request, res: Response) => {
  try {

    const query = req.query.q as string;
    const items = await getItems(query);
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const item = await getItemDetail(id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item details' });
  }
};
