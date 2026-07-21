import { Link } from 'react-router-dom';
import {
  NODEJS_INTERVIEW_QUESTIONS,
  NODEJS_QUESTION_CATEGORIES,
  searchNodejsQuestions,
} from '../data/nodejsInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function NodejsInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="nodejs"
      tags={['Node.js', 'Interview', 'Q & A']}
      title="Node.js Interview Questions"
      subtitle={`${NODEJS_INTERVIEW_QUESTIONS.length} Node.js interview questions with answers — fundamentals, the event loop & async model, modules & npm, async patterns (callbacks, promises, async/await), Express & middleware, buffers & streams, scaling & performance, and error handling, plus rapid-fire, scenario-based and coding questions. Click any question to reveal the answer.`}
      questions={NODEJS_INTERVIEW_QUESTIONS}
      categories={NODEJS_QUESTION_CATEGORIES}
      search={searchNodejsQuestions}
      downloadPdf={[
        { href: '/top-20-nodejs-interview-questions.pdf', label: 'Top 20 Node.js Interview Questions (PDF)' },
      ]}
      sourceNote={
        <p>
          Adapted from “Top 20 Node.js Interview Questions &amp; Answers” — verified and rewritten for
          accuracy. Switch to{' '}
          <Link to="/react-interview-questions" className="iq-footer-link">
            React
          </Link>
          ,{' '}
          <Link to="/nextjs-interview-questions" className="iq-footer-link">
            Next.js
          </Link>{' '}
          or{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>{' '}
          interview questions, or explore the{' '}
          <Link to="/interview" className="iq-footer-link">
            Interview Prep track
          </Link>
          .
        </p>
      }
    />
  );
}
