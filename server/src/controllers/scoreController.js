import Score from "../models/Score.js"
import { StatusCodes } from 'http-status-codes';

const addScore = async (req, res) => {
    const { nickname, score, userId } = req.body;
    const newScore = await Score.create({ nickname, score, userId });
    res.status(StatusCodes.CREATED).json({
        newScore
    });
}

const lastScore = async (req, res) => {
    const { id: userId } = req.params;
    const latestScore = await Score.findOne({
        where: { userId },
        order: [['createdAt', 'ASC']],
    })
    res
        .status(StatusCodes.OK)
        .json({ latestScore })
}

const highScore = async (req, res) => {
    const { id: userId } = req.params;
    const latestScore = await Score.findOne({
        where: { userId },
        order: [['score', 'DESC']],
    })
    res
        .status(StatusCodes.OK)
        .json({ latestScore })
}

export default { addScore, lastScore, highScore };