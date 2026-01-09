import React from 'react';

interface WelcomeProps {
  onStart: () => void;
  examPart: number;
  studentName?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart, examPart, studentName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fluid Mechanics Challenge</h1>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Part {examPart}</h2>
        
        {studentName && (
          <div className="mb-6 p-3 bg-blue-50 text-blue-800 rounded-lg inline-block font-medium">
            Welcome, {studentName}!
          </div>
        )}
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Test your knowledge with 50 objective questions from the Fluid Mechanics section. 
          You have <strong>50 minutes</strong> to complete this exam. 
          Each correct answer awards <strong>+1 mark</strong>. There is no negative marking.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <span className="block text-2xl font-bold text-blue-600 mb-1">50</span>
            <span className="text-sm text-gray-500 font-medium">Questions</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <span className="block text-2xl font-bold text-blue-600 mb-1">50m</span>
            <span className="text-sm text-gray-500 font-medium">Duration</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <span className="block text-2xl font-bold text-blue-600 mb-1">11</span>
            <span className="text-sm text-gray-500 font-medium">Section</span>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200 transform hover:scale-105 shadow-lg shadow-blue-200"
        >
          Start Exam {examPart}
        </button>
      </div>
    </div>
  );
};

export default Welcome;