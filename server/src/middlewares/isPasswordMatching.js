

const isPasswordMatching = (req, res, next) => {
    const { password, checkPassword } = req.body;
    if (password !== checkPassword) {
        throw new Error('Please provide matching passwords')
    }
    next()
}

export default isPasswordMatching;