import express from 'express';
import { createFood } from '../controls/food.controller.js';

const router = express.Router();

router.post('/create', createFood);


export default router;
