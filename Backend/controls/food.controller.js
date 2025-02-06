import Food from '../models/food.model.js';
import { errorHandler } from '../utils/error.js';

export const createFood = async (req, res, next) => {
    const{foodtype,quantity,expirydate,location}=req.body;

    if(!foodtype||!quantity||!expirydate||!location||foodtype===''||quantity===''||expirydate===''||location===''||quantity==='0'){
        next(errorHandler(400,'All field are required'));
    }
    const slug=req.body.foodtype.split('').join('-').toLowerCase().replace(/[^a-zA-A0-9-]/g,'-');
    const newfood=new Food({
        ...req.body,
        slug,
        userId:req.user.id,
    })
    try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }catch(error){
        next(error);
    }
}