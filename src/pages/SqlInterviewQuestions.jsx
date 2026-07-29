import { Link } from 'react-router-dom';
import {
  SQL_INTERVIEW_QUESTIONS,
  SQL_QUESTION_CATEGORIES,
  searchSqlQuestions,
} from '../data/sqlInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function SqlInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="sql-interview"
      tags={['SQL', 'Interview', 'Q & A']}
      title="SQL Interview Questions"
      subtitle={`${SQL_INTERVIEW_QUESTIONS.length} SQL interview questions with answers — basic level (keys, constraints, joins, UNION), intermediate level (subqueries, GROUP BY, CTEs, window functions, indexes, views), advanced level (ACID, transactions, JSON/XML, dynamic SQL), real-time scenarios, and query optimization techniques. Click any question to reveal the answer.`}
      questions={SQL_INTERVIEW_QUESTIONS}
      categories={SQL_QUESTION_CATEGORIES}
      search={searchSqlQuestions}
      downloadPdf={[
        { href: '/interview-notes/sql-interview-questions.pdf', label: 'SQL Interview Questions (PDF)' },
      ]}
      sourceNote={
        <p>
          Sourced from "SQL Interview Questions" by Vinay Kumar Panika. Switch to{' '}
          <Link to="/sql-query-puzzles" className="iq-footer-link">
            Tricky SQL Query Puzzles
          </Link>
          ,{' '}
          <Link to="/java-interview-questions" className="iq-footer-link">
            Java
          </Link>
          , or{' '}
          <Link to="/devops-interview-questions" className="iq-footer-link">
            DevOps
          </Link>{' '}
          interview questions.
        </p>
      }
    />
  );
}
