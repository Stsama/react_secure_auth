import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';

import { connectDB } from './db/connectDB.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


app.use(cors({origin: 'http://localhost:5173', credentials: true })); // allow requests from an origin

// middlewares
app.use(morgan('common')); // log requests
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // parse incoming cookies

app.use("/api/auth", authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});



