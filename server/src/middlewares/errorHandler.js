import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err.message);
    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong',
    }
    res.status(defaultError.statusCode).json({ msg: defaultError.msg });

}

export default { errorHandlerMiddleware };