import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();  
import userRoutes from './routes/user.route.js'; 
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});
app.listen(3000, () => console.log('Server running on port 3000'));
app.use('/api/user', userRoutes); // Fix this line