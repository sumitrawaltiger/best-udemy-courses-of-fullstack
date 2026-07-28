import { Link } from 'react-router-dom';
import {
  MICROSERVICES_INTERVIEW_QUESTIONS,
  MICROSERVICES_QUESTION_CATEGORIES,
  searchMicroservicesQuestions,
} from '../data/microservicesInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function MicroservicesInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="microservices"
      tags={['Microservices', 'Spring Boot', 'Interview', 'Q & A']}
      title="Microservices Interview Questions"
      subtitle={`${MICROSERVICES_INTERVIEW_QUESTIONS.length} microservices interview questions every backend developer should know — fundamentals, API Gateway, service discovery, communication, resilience, deployment, and security & best practices. Click any question to reveal the answer.`}
      questions={MICROSERVICES_INTERVIEW_QUESTIONS}
      categories={MICROSERVICES_QUESTION_CATEGORIES}
      search={searchMicroservicesQuestions}
      challengeTitle="The Original Cheat Sheet"
      challengeImages={[
        {
          title: 'Top 50 Microservices Interview Questions',
          image: '/interview-notes/top-50-microservices-interview-questions.jpg',
        },
      ]}
      sourceNote={
        <p>
          The 50 questions every backend developer should be ready for on microservices — from
          fundamentals to security. Switch to{' '}
          <Link to="/java-interview-questions" className="iq-footer-link">
            Java
          </Link>
          ,{' '}
          <Link to="/kafka-interview-questions" className="iq-footer-link">
            Kafka
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
