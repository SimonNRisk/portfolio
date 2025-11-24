import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { triviaQuestions } from "@/data/triviaData";
import { TriviaOptions } from "@/components/TriviaOptions";

export const Trivia = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState<{ question: string; answer: string }[]>([]);

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    if (option === currentQuestion.answer) {
      setCurrentScore(currentScore + 1);
    } else {
      setIncorrectQuestions([
        ...incorrectQuestions,
        { question: currentQuestion.question, answer: currentQuestion.answer },
      ]);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  if (currentQuestionIndex === triviaQuestions.length) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50">
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90vw] p-6 bg-white rounded-xl shadow-xl z-50">
          <h1 className="text-black text-2xl font-bold mb-4">Simon's Trivia</h1>
          <h2 className="text-black text-lg font-bold mb-4">
            You scored {currentScore} out of {triviaQuestions.length}
          </h2>
          <h3 className="text-black text-lg font-bold mb-4">What you got wrong:</h3>
          <ul className="list-disc list-inside text-black">
            {incorrectQuestions.map((question, index) => (
              <li key={index}>
                {question.question} <span className="font-bold">({question.answer})</span>
              </li>
            ))}
          </ul>
          <button
            className="flex items-center my-2 gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            onClick={onClose}
          >
            <FaTimes className="w-4 h-4" />
            Close
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-xl shadow-xl z-50">
        <button
          className="absolute top-2 right-2 p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
          onClick={onClose}
        >
          <FaTimes className="w-5 h-5" />
        </button>
        <h1 className="text-black text-2xl font-bold mb-4">Simon's Trivia</h1>
        <h2 className="text-black text-lg font-bold mb-4">{currentQuestion.question}</h2>
        <TriviaOptions options={currentQuestion.options} handleOptionClick={handleOptionClick} />
      </div>
    </div>
  );
};
