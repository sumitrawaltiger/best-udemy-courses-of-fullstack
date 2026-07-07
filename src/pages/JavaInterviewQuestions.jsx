import { Link } from 'react-router-dom';
import {
  JAVA_INTERVIEW_QUESTIONS,
  JAVA_QUESTION_CATEGORIES,
  searchJavaQuestions,
} from '../data/javaInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function JavaInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="java"
      tags={['Java', 'Interview', 'Q & A']}
      title="Java Interview Questions"
      subtitle={`${JAVA_INTERVIEW_QUESTIONS.length} Java interview questions with answers — core fundamentals, OOP, exceptions & collections, concurrency, coding problems, Spring & Boot, and REST APIs. Click any question to reveal the answer.`}
      questions={JAVA_INTERVIEW_QUESTIONS}
      categories={JAVA_QUESTION_CATEGORIES}
      search={searchJavaQuestions}
      downloadPdf={[
        { href: '/top-350-java-interview-questions.pdf', label: 'Top 350 Java Interview Questions (PDF)' },
        { href: '/java-interview-help.pdf', label: 'Java Interview Help (PDF)' },
        { href: '/1000-java-interview-questions.pdf', label: '1000 Java Interview Questions (PDF)' },
      ]}
      sourceNote={
        <p>
          Sourced from “Top 350 Java Interview Questions” by Happy Rawat. Switch to{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>{' '}
          or{' '}
          <Link to="/react-interview-questions" className="iq-footer-link">
            React
          </Link>{' '}
          interview questions.
        </p>
      }
    />
  );
}
