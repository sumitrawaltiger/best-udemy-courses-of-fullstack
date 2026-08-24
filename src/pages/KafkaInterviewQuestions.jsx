import { Link } from 'react-router-dom';
import {
  KAFKA_INTERVIEW_QUESTIONS,
  KAFKA_QUESTION_CATEGORIES,
  searchKafkaQuestions,
} from '../data/kafkaInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function KafkaInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="kafka"
      tags={['Kafka', 'Interview', 'Q & A']}
      title="Kafka Interview Questions"
      subtitle={`${KAFKA_INTERVIEW_QUESTIONS.length} of the trickiest Apache Kafka interview questions with answers — fundamentals, partitions & ordering, delivery semantics, consumer groups & rebalancing, storage & retention, reliability & performance, and the gotchas interviewers love. Click any question to reveal the answer.`}
      questions={KAFKA_INTERVIEW_QUESTIONS}
      categories={KAFKA_QUESTION_CATEGORIES}
      search={searchKafkaQuestions}
      downloadPdf={{ href: '/java-notes/kafka-interview-questions.pdf', label: 'Kafka Interview Questions PDF' }}
      sourceNote={
        <p>
          The tricky, real-world Kafka questions that separate "I've used Kafka" from "I understand
          Kafka." Switch to{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>
          ,{' '}
          <Link to="/react-interview-questions" className="iq-footer-link">
            React
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
