import React from 'react';
import { QuizResult, Question } from '../types';

interface ResultsProps {
  result: QuizResult;
  questions: Question[];
  onRetake: () => void;
  onNextExam?: () => void;
  hasNextExam: boolean;
}

const Results: React.FC<ResultsProps> = ({ result, questions, onRetake, onNextExam, hasNextExam }) => {
  const percentage = Math.round((result.score / result.total) * 100);
  
  const getGradeColor = (p: number) => {
    if (p >= 80) return 'text-green-600';
    if (p >= 60) return 'text-blue-600';
    if (p >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (p: number) => {
    if (p >= 80) return 'bg-green-500';
    if (p >= 60) return 'bg-blue-500';
    if (p >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gray-900 p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p className="text-gray-400 mb-6">Here is how you performed in Fluid Mechanics</p>
            
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className={`text-5xl font-bold ${getGradeColor(percentage)} mb-1 bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner`}>
                  {percentage}%
                </div>
                <div className="text-sm font-medium text-gray-400 mt-2">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-100 mb-1 flex items-center justify-center h-24">
                  {result.score}<span className="text-2xl text-gray-500">/{result.total}</span>
                </div>
                <div className="text-sm font-medium text-gray-400 mt-2">Score</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4 max-w-md mx-auto">
              <div 
                className={`h-2.5 rounded-full ${getProgressColor(percentage)}`} 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={onRetake}
              className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Retake This Exam
            </button>
            {hasNextExam && onNextExam && (
              <button
                onClick={onNextExam}
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-200"
              >
                Proceed to Exam 2
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Detailed Review */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">Detailed Review</h3>
        <div className="space-y-4">
          {questions.map((q, index) => {
            const userAnswer = result.userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isSkipped = userAnswer === undefined;

            return (
              <div 
                key={q.id} 
                className={`bg-white rounded-xl p-6 border-l-4 shadow-sm ${
                  isCorrect 
                    ? 'border-green-500' 
                    : isSkipped 
                      ? 'border-gray-400' 
                      : 'border-red-500'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-900 pr-4">
                    <span className="text-gray-400 font-normal mr-2">{questions.indexOf(q) + 1 + (questions[0].id > 50 ? 50 : 0)}.</span>
                    {q.text}
                  </h4>
                  <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                    isCorrect 
                      ? 'bg-green-100 text-green-800' 
                      : isSkipped
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {isCorrect ? '+1 Mark' : '0 Marks'}
                  </span>
                </div>

                <div className="space-y-2 ml-4 md:ml-8">
                  {q.options.map((opt, i) => {
                    const isSelected = userAnswer === i;
                    const isTheCorrectAnswer = q.correctAnswer === i;
                    
                    let itemClass = "p-3 rounded-lg text-sm border ";
                    let icon = null;

                    if (isTheCorrectAnswer) {
                      itemClass += "bg-green-50 border-green-200 text-green-900 font-medium";
                      icon = (
                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      );
                    } else if (isSelected && !isTheCorrectAnswer) {
                      itemClass += "bg-red-50 border-red-200 text-red-900";
                      icon = (
                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      );
                    } else {
                      itemClass += "bg-white border-transparent text-gray-500 opacity-70";
                    }

                    return (
                      <div key={i} className={`flex items-center justify-between ${itemClass}`}>
                        <div className="flex items-center">
                          <span className="w-6 text-gray-400 font-mono text-xs mr-2">
                            {String.fromCharCode(97 + i)}.
                          </span>
                          {opt}
                        </div>
                        {icon}
                      </div>
                    );
                  })}
                </div>
                
                {q.explanation && (
                  <div className="mt-4 ml-4 md:ml-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-slate-700 animate-fade-in">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="block font-semibold text-blue-900 mb-1">Explanation</strong>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;