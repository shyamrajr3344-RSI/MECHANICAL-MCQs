export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-4)
  explanation?: string;
}

export enum QuizState {
  REGISTRATION,
  WELCOME,
  ACTIVE,
  COMPLETED,
  ADMIN,
}

export interface StudentInfo {
  name: string;
  ktuId: string;
  email: string;
}

export interface QuizResult {
  score: number;
  total: number;
  userAnswers: Record<number, number>; // questionId -> selectedOptionIndex
  timeTaken: number; // in seconds
}

export interface StoredResult {
  studentInfo: StudentInfo;
  examPart: number;
  score: number;
  total: number;
  timestamp: string;
}