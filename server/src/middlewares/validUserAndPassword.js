import User from "../models/User.js";

const validUserAndPassword = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } })
    if (!user) {
        throw new Error('Invalid Credentials')
    }
    const isPasswordCorrect = await user.validPassword(password);
    if (!isPasswordCorrect) {
        throw new Error('Invalid Credentials')
    }
    next()
}

export default validUserAndPassword;