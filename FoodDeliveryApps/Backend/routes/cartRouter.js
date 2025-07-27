import express from 'express';

import { addToCart, removeCart, getCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js'



const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeCart);
cartRouter.post('/get', authMiddleware, getCart);
// cartRouter.post('/api/card', cartRouter)


export default cartRouter;