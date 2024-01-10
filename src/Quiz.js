// Quiz.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Quiz.css"

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
        question: 'Which element has the chemical symbol "H"?',
        options: ['Helium', 'Hydrogen', 'Hassium', 'Hafnium'],
        correctAnswer: 'Hydrogen',
      },
      {
        question: 'Who is the author of "To Kill a Mockingbird"?',
        options: ['J.K. Rowling', 'Harper Lee', 'George Orwell', 'Mark Twain'],
        correctAnswer: 'Harper Lee',
      },
      {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
      },
      {
        question: 'What is the largest mammal on Earth?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale',
      },
      {
        question: 'In which year did the Titanic sink?',
        options: ['1910', '1912', '1920', '1930'],
        correctAnswer: '1912',
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
        correctAnswer: 'Leonardo da Vinci',
      },
      {
        question: 'What is the capital of Brazil?',
        options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
        correctAnswer: 'Brasília',
      },
      {
        question: 'Which continent is known as the "Land Down Under"?',
        options: ['Africa', 'Asia', 'Australia', 'Europe'],
        correctAnswer: 'Australia',
      },
      {
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
        correctAnswer: 'Albert Einstein',
      },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'In which year did World War II end?',
      options: ['1943', '1945', '1950', '1960'],
      correctAnswer: '1945',
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result', { state: { score } });
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="question">{questions[currentQuestion].question}</h2>
      <ul className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} className="option" onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;