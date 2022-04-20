import User from "../models/User.js";

const validUserAndPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    next(new Error("Invalid Credentials"));
  }
  const isPasswordCorrect = await user.validPassword(password);
  if (!isPasswordCorrect) {
    next(new Error("Invalid Credentials"));
  }
  next();
};

export default validUserAndPassword;
