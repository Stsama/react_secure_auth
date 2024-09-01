import express from 'express';
import { verifyAuth } from '../middleware/verifyAuth.js';
import { login, signup, logout, verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controllers.js";


const router = express.Router();

router.get('/check-auth', verifyAuth, checkAuth);

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.post('/verify-email', verifyEmail); // new route

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);


export default router;