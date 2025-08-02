const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes')

userRoutes(router)

module.exports = router
