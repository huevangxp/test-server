import express from 'express';
const router = express.Router();

import userRoutes from './user.routes.js';
// import productRoutes from './product.routes.js';
import categoriesRoutes from './categories.routes.js';
import manageFolderRoutes from './manage.folder.routes.js';

userRoutes(router)
// productRoutes(router)
categoriesRoutes(router)
manageFolderRoutes(router)

export default router

