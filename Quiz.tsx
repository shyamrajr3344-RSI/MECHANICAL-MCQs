import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (userAnswers: Record<number, number>, timeTaken: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 minutes in seconds

  const handleTimeUp = useCallback(() => {
    onComplete(answers, 50 * 60 - timeLeft);
  }, [answers, onComplete, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleTimeUp]);

  const handleOptionSelect = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: optionIndex,
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((Object.keys(answers).length) / questions.length) * 100;

  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
             <div className="text-sm font-medium text-gray-500">
               Question <span className="text-gray-900 font-bold">{currentQuestionIndex + 1}</span><span className="text-gray-400">/</span>{questions.length}
             </div>
          </div>
          <div className={`font-mono text-lg font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-blue-600'} bg-gray-100 px-3 py-1 rounded-md`}>
            {formatTime(timeLeft)}
          </div>
        </div>
        <div className="h-1 w-full bg-gray-100">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 leading-snug flex items-start">
             <span className="text-blue-600 mr-2 md:mr-3 flex-shrink-0">{currentQuestionIndex + 1}.</span>
             <span>{currentQuestion.text}</span>
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = answers[currentQuestion.id] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start group active:scale-[0.99] ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300 group-hover:border-blue-300'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10"/>
                      </svg>
                    )}
                  </div>
                  <span className={`text-base ${isSelected ? 'text-blue-900 font-medium' : 'text-gray-700'}`}>
                    <span className="uppercase font-bold mr-2 text-gray-400 text-sm">
                      {String.fromCharCode(97 + index)}.
                    </span>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4 pb-8">
          <button
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm active:bg-gray-200'
            }`}
          >
            Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={() => onComplete(answers, 50 * 60 - timeLeft)}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-transform transform hover:scale-105 active:scale-95"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-transform transform hover:scale-105 active:scale-95"
            >
              Next
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;