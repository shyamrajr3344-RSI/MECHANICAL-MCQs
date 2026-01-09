import React, { useEffect, useState } from 'react';
import { StoredResult } from '../types';

interface AdminDashboardProps {
  onBack: () => void;
}

interface AggregatedResult {
  ktuId: string;
  name: string;
  email: string;
  part1Score: string;
  part2Score: string;
  lastUpdated: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [results, setResults] = useState<AggregatedResult[]>([]);

  useEffect(() => {
    const loadResults = () => {
      const storedData = localStorage.getItem('fluid_mechanics_exam_submissions');
      if (!storedData) return;

      const submissions: StoredResult[] = JSON.parse(storedData);
      const aggregated: Record<string, AggregatedResult> = {};

      submissions.forEach((sub) => {
        const key = sub.studentInfo.ktuId;
        if (!aggregated[key]) {
          aggregated[key] = {
            ktuId: sub.studentInfo.ktuId,
            name: sub.studentInfo.name,
            email: sub.studentInfo.email,
            part1Score: '-',
            part2Score: '-',
            lastUpdated: sub.timestamp,
          };
        }
        
        // Update scores
        if (sub.examPart === 1) {
          aggregated[key].part1Score = `${sub.score}/${sub.total}`;
        } else if (sub.examPart === 2) {
          aggregated[key].part2Score = `${sub.score}/${sub.total}`;
        }
        
        // Keep latest timestamp
        if (new Date(sub.timestamp) > new Date(aggregated[key].lastUpdated)) {
            aggregated[key].lastUpdated = sub.timestamp;
        }
      });

      setResults(Object.values(aggregated));
    };

    loadResults();
  }, []);

  const downloadCSV = () => {
    const headers = ['KTU ID', 'Student Name', 'Email', 'Exam 1 Score', 'Exam 2 Score', 'Last Updated'];
    const rows = results.map(r => [
      r.ktuId,
      `"${r.name}"`, // Quote name to handle commas
      r.email,
      r.part1Score,
      r.part2Score,
      new Date(r.lastUpdated).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `exam_results_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="space-x-4">
            <button
              onClick={onBack}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={downloadCSV}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-sm transition-colors flex items-center inline-flex"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Excel (CSV)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KTU ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam 1 Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam 2 Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No submissions found yet.
                    </td>
                  </tr>
                ) : (
                  results.map((r) => (
                    <tr key={r.ktuId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{r.ktuId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{r.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{r.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          r.part1Score !== '-' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {r.part1Score}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          r.part2Score !== '-' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {r.part2Score}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(r.lastUpdated).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;