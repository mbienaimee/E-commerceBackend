import express from 'express';
import mongoose from 'mongoose';
import route from './route/product.route.js';
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT 
const db = process.env.MONGO_DB
const app = express();

app.use(express.json());
app.use('/api/product',route)


mongoose.connect(db)
try{
    console.log('connected to db')
    app.listen(port,()=>{
        console.log(`server is running on port ${port} ...`)
    })

}catch(err){
    console.log(err)
}