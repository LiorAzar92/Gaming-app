import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import axios from "axios";

const Start = ({ onQuizStart }) => {
  const { user } = useAppContext();
  const nickname = user?.nickname;

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1> Hey, {nickname}, welcome to the quiz: 📚ISRAEL & ARGENTINA📚</h1>
          <p>Good luck! Your last score is and your highest score is</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
