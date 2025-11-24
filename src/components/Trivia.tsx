import { useState } from "react";

import { triviaQuestions } from "@/data/triviaData";
import { TriviaOptions } from "@/components/TriviaOptions";

export const Trivia = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    if (option === currentQuestion.answer) {
      setCurrentScore(currentScore + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  if (currentQuestionIndex === triviaQuestions.length) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50">
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-xl shadow-xl z-50">
          <h1 className="text-black text-2xl font-bold mb-4">Simon's Trivia</h1>
          <h2 className="text-black text-lg font-bold mb-4">
            You scored {currentScore} out of {triviaQuestions.length}
          </h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-xl shadow-xl z-50">
        <h1 className="text-black text-2xl font-bold mb-4">Simon's Trivia</h1>
        <h2 className="text-black text-lg font-bold mb-4">{currentQuestion.question}</h2>
        <TriviaOptions options={currentQuestion.options} handleOptionClick={handleOptionClick} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
