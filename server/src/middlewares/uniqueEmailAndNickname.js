import User from "../models/User.js";

const uniqueEmailAndNickname = async (req, res, next) => {
    const { email, nickname } = req.body;
    if (await User.findOne({ where: { email: email } })) {
        throw Error('Not unique Email')
    }
    if (await User.findOne({ where: { nickname: nickname } })) {
        throw Error('Not unique Nickname')
    }
    next()
}

export default uniqueEmailAndNickname;