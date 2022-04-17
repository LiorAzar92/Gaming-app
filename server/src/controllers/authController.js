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

export default { register, login };