
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate('/');
  };

  return (
    <div className="result-container">
      <h2 className="result-score">Your Score: {score}</h2>
      <p className="result-message">Thanks for playing!</p>
      <button className="play-again-button" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Result;
