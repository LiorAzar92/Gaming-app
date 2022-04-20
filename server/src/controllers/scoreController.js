import Score from "../models/Score.js";
import { StatusCodes } from "http-status-codes";
import CustomError from "../error.js";
const addScore = async (req, res) => {
  try {
    const { nickname, score, userId } = req.body;
    console.log(userId);
    const newScore = await Score.create({ nickname, score, userId });
    res.status(StatusCodes.CREATED).json({
      newScore,
    });
  } catch (e) {
    throw new CustomError(e);
  }
};

const lastScore = async (req, res) => {
  const { id: userId } = req.params;
  const latestScore = await Score.findOne({
    where: { userId },
    order: [["createdAt", "DESC"]],
  });
  res.status(StatusCodes.OK).json({ latestScore });
};

const highScore = async (req, res) => {
  const { id: userId } = req.params;
  const latestScore = await Score.findOne({
    where: { userId },
    order: [["score", "DESC"]],
  });
  res.status(StatusCodes.OK).json({ latestScore });
};

export default { addScore, lastScore, highScore };
