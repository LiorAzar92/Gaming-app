const loginValidFields = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error('Please provide all values')
    }
    next()
}

export default loginValidFields;