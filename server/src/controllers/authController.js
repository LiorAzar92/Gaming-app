import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';


const register = async (req, res) => {
    const { firstName, lastName, nickname, email, password, checkPassword } = req.body;
    const user = await User.create({ firstName, lastName, nickname, email, password, checkPassword })
    const token = user.createJWT();
    user.password = undefined;
    user.checkPassword = undefined;
    res.status(StatusCodes.CREATED).json({
        user,
        token
    });
}



const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } })
    const token = user.createJWT();
    user.password = undefined;
    user.checkPassword = undefined;
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