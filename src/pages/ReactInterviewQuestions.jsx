import { Link } from 'react-router-dom';
import {
  REACT_INTERVIEW_QUESTIONS,
  REACT_QUESTION_CATEGORIES,
  searchReactQuestions,
} from '../data/reactInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function ReactInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="react"
      tags={['React', 'Interview', 'Q & A']}
      title="React Interview Questions"
      subtitle={`${REACT_INTERVIEW_QUESTIONS.length} React interview questions with answers — fundamentals, JSX & components, hooks, lifecycle, routing, Redux, and JS essentials for React. Click any question to reveal the answer.`}
      questions={REACT_INTERVIEW_QUESTIONS}
      categories={REACT_QUESTION_CATEGORIES}
      search={searchReactQuestions}
      downloadPdf={[
        {
          href: '/top-20-react-interview-questions.pdf',
          label: 'Top 20 React Interview Questions & Answers (PDF)',
        },
        {
          href: '/top-200-react-interview-questions.pdf',
          label: 'Top 200 React Interview Questions (PDF)',
        },
        {
          href: '/reactjs-interview-questions-visual.pdf',
          label: 'ReactJS Interview Questions — Visual Guide (PDF)',
        },
      ]}
      sourceNote={
        <p>
          Sourced from “Top 200 React Interview Questions” by Happy Rawat. Switch to{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript interview questions
          </Link>{' '}
          or explore the{' '}
          <Link to="/" className="iq-footer-link">
            100 Days of Code
          </Link>{' '}
          lessons.
        </p>
      }
    />
  );
}
