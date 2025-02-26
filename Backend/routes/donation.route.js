import express from 'express';
import { createElectronics, createFood,createClothes, createStationary, createToys } from '../controls/donate.controller.js';
// import { createClothes } from '../controls/donate.controller.js';
// import {verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createFood);
router.post('/createClothes',createClothes);
router.post('/createElectronics',createElectronics);
router.post('/createStationary',createStationary);
router.post('/createToys',createToys)


export default router;
