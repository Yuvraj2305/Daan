import express from 'express';
import { createFood } from '../controls/donate.controller.js';
import { createClothes } from '../controls/donate.controller.js';
// import {verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createFood);
router.post('/createClothes',createClothes);


export default router;
