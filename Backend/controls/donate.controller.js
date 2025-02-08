import Food from '../models/food.model.js';
import Clothes from '../models/clothes.model.js';
import { errorHandler } from '../utils/error.js';

export const createFood = async (req, res, next) => {
    const{foodType,quantity,expirydate,location}=req.body;

    if(!foodType||!quantity||!expirydate||!location||foodType===''||quantity===''||expirydate===''||location===''||quantity===0){
        next(errorHandler(400,'All field are required'));
    }
    const newfood=new Food({
        ...req.body,
    })
    try{
        const savedPost=await newfood.save();
        res.status(200).json(savedPost);
    }catch(error){
        next(error);
    }
}

export const createClothes =async(req,res,next)=>{
    const {typeOfClothing,size,condition,quantity,collectionAddress,additionalNote}=req.body;

    if(!typeOfClothing||!size||!condition||!quantity||!collectionAddress||!additionalNote||typeOfClothing===''||size===''||condition===''||quantity===''||collectionAddress===''||additionalNote===''||quantity===0){
        next(errorHandler(400,'All field are required'));
    }
    const newclothe=new Clothes({
        ...req.body,
        // userId:req.user.id,
    })
    try{
        const savedPost=await newclothe.save();
        res.status(200).json(savedPost);
    }catch(error){
        next(error);
    }
}