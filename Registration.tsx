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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.ktuId && formData.email) {
      onRegister(formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-gray-50">
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
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200 transform hover:scale-[1.02]"
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