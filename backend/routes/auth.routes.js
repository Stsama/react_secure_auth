import express from 'express';
import { login, signup, logout, verifyEmail, forgotPassword } from "../controllers/auth.controllers.js";


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.post('/verify-email', verifyEmail); // new route

router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);


export default router;