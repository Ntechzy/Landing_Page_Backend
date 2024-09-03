import mongoose from "mongoose";
import { User } from "../models/user.model.js";

const test = async (req, res) =>{
    res.send("Hello World")
}

const registerUser = async (req, res) =>{
    try {
        const {name, contact_number, email, neetScore, neetAIR, state, district, course} = req.body;

        if([name, email, contact_number, neetScore, neetAIR, state, district, course].some((field) => field === "")){
            return res.status(400).json({msg: "Fields cannot be empty"})
        }

        const existUser = await User.findOne({$or: [{contact_number}, {email}]})
        if(existUser){
            return res.status(400).json({msg: "You have already registered"})
        }

        const createdUser = await User.create({
            name,
            contact_number,
            email,
            neetScore,
            neetAIR,
            state,
            district,
            course
        });

        if(!createdUser){
            return res.status(500).json({msg: "Something went wrong while creating user"})
        }

        return res.status(200).json({data: createdUser, msg: "You have successfully registered"})
        
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


export {
    registerUser,
    test
}