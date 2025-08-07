import express from 'express';
const router = express.Router();

import userRoutes from './user.routes.js'

userRoutes(router)

export default router

