import React, { useState } from 'react';
import { StudentInfo } from '../types';

interface RegistrationProps {
  onRegister: (info: StudentInfo) => void;
  onAdminLogin: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onRegister, onAdminLogin }) => {
  const [formData, setFormData] = useState<StudentInfo>({
    name: '',
    ktuId: '',
    email: '',
  });
  const [showCopied, setShowCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.ktuId && formData.email) {
      onRegister(formData);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fluid Mechanics MCQ Practice',
          text: 'Practice for MET 308 Comprehensive Course Work - Mechanical Engineering (2019 Scheme)',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error, ignore
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4 animate-fade-in bg-gray-50 relative">
      {/* Share Button */}
      <button
        onClick={handleShare}
        className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md text-blue-600 hover:bg-blue-50 transition-colors z-10 flex items-center justify-center group active:scale-95"
        title="Share App Link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      
      {showCopied && (
        <div className="absolute top-16 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg animate-fade-in z-20">
          Link Copied!
        </div>
      )}

      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Mechanical Engineering</h2>
            <div className="text-md font-bold text-gray-600 uppercase tracking-wide mt-1 mb-2">(2019 Scheme)</div>
            <h3 className="text-md font-semibold text-blue-600">MET 308 Comprehensive Course Work</h3>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Student Registration</h1>
          <p className="text-gray-500 mt-2">Please enter your details to proceed to the exam.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="ktuId" className="block text-sm font-medium text-gray-700 mb-1">
              KTU ID
            </label>
            <input
              type="text"
              id="ktuId"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="e.g. TVA19ME001"
              value={formData.ktuId}
              onChange={(e) => setFormData({ ...formData, ktuId: e.target.value.toUpperCase() })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200 transform hover:scale-[1.02] active:scale-95"
          >
            Continue to Exam
          </button>
        </form>
      </div>

      <div className="mt-8">
        <button
          onClick={onAdminLogin}
          className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
        >
          Admin Access
        </button>
      </div>
    </div>
  );
};

export default Registration;