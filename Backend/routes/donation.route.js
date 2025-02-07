import express from 'express';
import { createFood } from '../controls/food.controller.js';
// import {verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createFood);


export default router;
