import { Link } from 'react-router-dom';
import {
  NEXTJS_INTERVIEW_QUESTIONS,
  NEXTJS_QUESTION_CATEGORIES,
  searchNextjsQuestions,
} from '../data/nextjsInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function NextjsInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="nextjs"
      tags={['Next.js', 'Interview', 'Q & A']}
      title="Next.js Interview Questions"
      subtitle={`${NEXTJS_INTERVIEW_QUESTIONS.length} Next.js interview questions with answers — fundamentals, routing & navigation, data fetching & rendering (SSG/SSR/ISR), styling & assets, API & config, and advanced integrations. Click any question to reveal the answer.`}
      questions={NEXTJS_INTERVIEW_QUESTIONS}
      categories={NEXTJS_QUESTION_CATEGORIES}
      search={searchNextjsQuestions}
      downloadPdf={{
        href: '/nextjs-interview-questions.docx',
        label: 'Essential Next.js Interview Questions (DOCX)',
      }}
      sourceNote={
        <p>
          Sourced from the “Essential Next.js Interview Questions” document. Switch to{' '}
          <Link to="/react-interview-questions" className="iq-footer-link">
            React
          </Link>
          ,{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>
          , or{' '}
          <Link to="/java-interview-questions" className="iq-footer-link">
            Java
          </Link>{' '}
          interview questions.
        </p>
      }
    />
  );
}
