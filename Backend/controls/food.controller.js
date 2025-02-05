import Food from '../models/food.model.js';
import { errorHandler } from '../utils/error.js';

export const createFood = async (req, res, next) => {
    if (!req.user) {
        return next(errorHandler(401, 'Unauthorized'));
    }
    if(!req.body.foodtype || !req.body.quantity || !req.body.expirydate || !req.body.location) {
        return next(errorHandler(400, 'All fields are required'));
    }

    const slug = req.body.foodtype.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '-');
    const newFood = new Food({
        ...req.body,
        slug,
        userId: req.user.id,
    });
    try {
        const savedFood = await newFood.save();
        res.status(200).json(savedFood);
    }
    catch (error) {
        next(error);
    }

}