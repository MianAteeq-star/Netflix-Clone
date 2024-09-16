import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const loginController = async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Email Not Found" })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })



        return res
            .status(200)
            .cookie("token", token).json({
                success: true,
                message: "User logged in successfully",
                user,
                token
            });
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success: false,
                message: "Error in login controller", error
            })
    }

}
export const registerController = async (req, res) => {
    try {

        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        if (password.length < 8) {
            return res
                .status(400)
                .json({ message: "Password must be atleast 8 characters" });
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hasshPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username,
            email,
            password: hasshPassword
        })

        await newUser.save()

        res.status(201).send(
            {
                success: true,
                message: "User registered successfully",
                newUser
            }

        )
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success: false,
                message: "Error in register controller", error
            })
    }


}
export const logoutController = async (req, res) => {
try {
    return res
            .status(200)
            .cookie("token", " ").json({
                success: true,
                message: "User logout  successfully",
               
            });
       
} catch (error) {
    console.log(error)
    res.status(500).send(
        {
            success: false,
            message: "Error in logout controller", error
        })
    
}
}