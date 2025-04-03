// src/models/Test.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

interface IOption extends Document {
  text: string;
  isCorrect: boolean;
}

interface IQuestion extends Document {
  question: string;
  questionType: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  options: IOption[];
  correctAnswer?: string;
  points: number;
}

export interface ITest extends Document {
  title: string;
  description?: string;
  questions: IQuestion[];
  timeLimit?: number;
  passingScore: number;
  isPublished: boolean;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

// Define the option schema
const OptionSchema = new Schema<IOption>({
  text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});

// Define the question schema
const QuestionSchema = new Schema<IQuestion>({
  question: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ['multiple-choice', 'true-false', 'short-answer', 'essay'],
    default: 'multiple-choice',
  },
  options: [OptionSchema],
  correctAnswer: {
    type: String,
    // Required only for short-answer and essay questions
  },
  points: {
    type: Number,
    default: 1,
  },
});

// Define the test schema
const TestSchema = new Schema<ITest>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    questions: [QuestionSchema],
    timeLimit: {
      type: Number,
      // Time in minutes, null means no time limit
    },
    passingScore: {
      type: Number,
      default: 70, // Percentage
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create and export Test model
// Check if model exists to prevent model redefinition error in development with HMR
const Test: Model<ITest> = 
  mongoose.models.Test || mongoose.model<ITest>('Test', TestSchema);

export default Test;