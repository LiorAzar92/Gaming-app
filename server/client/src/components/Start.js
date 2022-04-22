import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import axios from "axios";

const Start = ({ onQuizStart }) => {
  const [lastScore, setLastScore] = useState("");
  const [highScore, setHighScore] = useState("");
  const { user } = useAppContext();
  const nickname = user?.nickname;

  async function getScores() {
    const URL = "http://localhost:5000/api/score/";
    const nickname = user?.nickname;
    const lastScoreObtained = await axios.get(`${URL}lastScore/${nickname}`);
    if (lastScoreObtained.data.latestScore == null) {
      setLastScore("not available");
    } else {
      setLastScore(lastScoreObtained.data.latestScore.score);
    }
    const highScoreObtained = await axios.get(`${URL}highScore/${nickname}`);
    if (highScoreObtained.data.latestScore == null) {
      setHighScore("not available");
    } else {
      setHighScore(highScoreObtained.data.latestScore.score);
    }

    // console.log(
    //   "LAST SCORE:",
    //   lastScoreObtained.data.latestScore.score,
    //   "HIGHEST SCORE:",
    //   highScoreObtained.data.latestScore.score
    // );
  }
  useEffect(() => {
    getScores();
  }, [getScores]);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1> Challenge yourself, {nickname}!</h1>
          {!lastScore ? (
            ""
          ) : (
            <p>
              <strong>Last score: </strong>
              {lastScore}
            </p>
          )}
          {highScore ? (
            <p>
              <strong>Highest score: </strong>
              {highScore}
            </p>
          ) : (
            ""
          )}
          <button className="button is-info is-medium" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
