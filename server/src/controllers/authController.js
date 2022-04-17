import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

const register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
        throw new Error('Please provide all values')
    }
    const user = await User.create({ name, email, password })
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
        user: {
            email: user.email,
            name: user.name,
        },
        token
    });
}



const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error('Please provide all values');
    }
    const user = await User.findOne({ where: { email: email } })
    if (!user) {
        throw new Error('Invalid Credentials')
    }
    const isPasswordCorrect = await user.validPassword(password);
    if (!isPasswordCorrect) {
        throw new Error('Invalid Credentials')
    }
    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({ user, token });
}

// const updateUser = async (req, res) => {
//     const { email, password, name, phoneNumber, bio } = req.body;
//     if (!email || !password || !name || !phoneNumber) {
//         throw new Error('Please provide all values');
//     }
//     const user = await User.findOne({ userId: req.user._id });

//     user.email = email;
//     user.password = password;
//     user.name = name;
//     user.phoneNumber = phoneNumber;
//     user.bio = bio;

//     await user.save();

//     const token = user.createJWT();
//     user.password = undefined;
//     res.status(StatusCodes.OK).json({ user, token });
// }

export default { register, login };