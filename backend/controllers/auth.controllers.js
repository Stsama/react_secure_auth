import { User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail } from '../mailtrap/emails.js';
import {generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookie.js';


dotenv.config();

export const signup = async (req, res) => {
    const {email, password, name} = req.body;
    try {
        console.log(req.body);
        if(!email || !password || !name){
           throw new Error("Please fill in all fields");
        }
        const userAllreadyExists = await User.findOne({email});
        if (userAllreadyExists) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const user = await User.create({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours 
        });

        // save the user in the database
        await user.save();

        // jwt token
        generateTokenAndSetCookie(res, user._id);

        // send verification email
        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            success: true,
            message: "User created successfully",
        user: {
            ...user._doc,
            password: undefined,
        },
        });

    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

export const verifyEmail = async (req, res) => {
    // get the verification token from the request
    const {code} = req.body;
    try{
        // find the user with the verification token
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: {$gt: Date.now()},
        });
        if (!user) {
            return res.status(500).json({success: false, message: "Invalid or expired verification token"});
        }
        // update the user
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        // save the user
        await user.save();

        // send a welcome email
        await sendWelcomeEmail(user.email, user.name);
        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        });

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}


export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        if(!email || !password){
            return res.status(400).json({success: false, message:"Please fill in all fields"});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({success: false, message:"Invalid credentials"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({success: false, message:"Invalid credentials"});
        }
        // jwt token
        generateTokenAndSetCookie(res, user._id);

        user.lastLogin = Date.now();
        await user.save();
        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        });
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({success: true, message: "Logged out successfully"});
}

export const forgotPassword = async (req, res) => {
    const {email} = req.body;
    try {
        if(!email){
            return res.status(400).json({success: false, message:"Please fill in all fields"});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({success: false, message:"User not found"});
        }

        // generate a reset password token
        const resetPasswordToken = crypto.randomBytes(20).toString('hex');
        const resetPasswordExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hours
        // update the user
        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpiresAt = resetPasswordExpiresAt;
        await user.save();
        sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`);
        res.status(200).json({success: true, message: "Password reset link sent successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

export const resetPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    try {
        if(!password){ 
            return res.status(400).json({success: false, message:"Enter a new password"});
        }
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: {$gt: Date.now()},
        });
        if (!user) {
            return res.status(400).json({success: false, message:"Invalid or expired reset password token"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;
        await user.save();

        await sendResetSuccessEmail(user.email);
        res.status(200).json({success: true, message: "Password reset successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
