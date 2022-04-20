import React from "react";
import { useAppContext } from "../context/appContext";

const Start = ({ onQuizStart }) => {
  const { user } = useAppContext();
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>
            {" "}
            Hey, {user?.nickname}, welcome to the quiz: 📚ISRAEL & ARGENTINA📚
          </h1>
          <p>Good luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
