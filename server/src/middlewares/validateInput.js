const validateInput = (req, res, next) => {
  const { firstName, lastName, nickname, email, password, checkPassword } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !nickname ||
    !email ||
    !password ||
    !checkPassword
  ) {
    next(new Error("Please provide all values"));
  }
  next();
};

export default validateInput;
