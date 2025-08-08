import express from 'express';
const router = express.Router();

import userRoutes from './user.routes.js';
// import productRoutes from './product.routes.js';
import categoriesRoutes from './categories.routes.js';

userRoutes(router)
// productRoutes(router)
categoriesRoutes(router)

export default router

