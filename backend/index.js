import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';

import { connectDB } from './db/connectDB.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// middlewares
app.use(morgan('common')); // log requests
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // parse incoming cookies
app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});



