import categoryModel from "../model/category.model.js";

const categoryController = {
    addCategory: async (req,res)=>{
        try{
            const category = await categoryModel.create(req.body);
            res.status(201).json(category);
        }catch(err){
            res.status(500).json(err);
        }
    }
}

export default categoryController;