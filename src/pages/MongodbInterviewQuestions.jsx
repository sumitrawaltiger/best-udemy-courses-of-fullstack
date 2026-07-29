import { Link } from 'react-router-dom';
import {
  MONGODB_INTERVIEW_QUESTIONS,
  MONGODB_QUESTION_CATEGORIES,
  searchMongodbQuestions,
} from '../data/mongodbInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function MongodbInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="mongodb"
      tags={['MongoDB', 'Interview', 'Q & A']}
      title="MongoDB Interview Questions"
      subtitle={`${MONGODB_INTERVIEW_QUESTIONS.length} MongoDB interview questions with answers — SQL vs MongoDB, indexing & performance, the aggregation pipeline, and essential shell & Mongoose reference. Click any question to reveal the answer.`}
      questions={MONGODB_INTERVIEW_QUESTIONS}
      categories={MONGODB_QUESTION_CATEGORIES}
      search={searchMongodbQuestions}
      downloadPdf={[
        { href: '/interview-notes/mongodb-interview-questions.pdf', label: 'MongoDB Interview Questions (PDF)' },
      ]}
      sourceNote={
        <p>
          Sourced from "Top MongoDB Interview Questions — 2026 Ultimate Interview Guide" by
          AlgoTutor. Switch to{' '}
          <Link to="/sql-interview-questions" className="iq-footer-link">
            SQL
          </Link>
          ,{' '}
          <Link to="/kafka-interview-questions" className="iq-footer-link">
            Kafka
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
