import { Link } from 'react-router-dom';
import {
  JS_INTERVIEW_QUESTIONS,
  JS_QUESTION_CATEGORIES,
  searchJsQuestions,
} from '../data/interviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function InterviewQuestions() {
  return (
    <InterviewQnA
      topicId="javascript"
      tags={['JavaScript', 'Interview', 'Q & A']}
      title="JavaScript Interview Questions"
      subtitle={`${JS_INTERVIEW_QUESTIONS.length} hand-picked JavaScript questions with clear answers and code examples — from fundamentals and closures to the event loop and tricky output. Click any question to reveal the answer.`}
      questions={JS_INTERVIEW_QUESTIONS}
      categories={JS_QUESTION_CATEGORIES}
      search={searchJsQuestions}
      downloadPdf={{
        href: '/essential-javascript-interview-questions.docx',
        label: 'Essential JavaScript Interview Questions (DOCX)',
      }}
      sourceNote={
        <p>
          Pair these with the{' '}
          <Link to="/" className="iq-footer-link">
            100 Days of Code
          </Link>{' '}
          lessons, or switch to{' '}
          <Link to="/react-interview-questions" className="iq-footer-link">
            React interview questions
          </Link>
          .
        </p>
      }
    />
  );
}
