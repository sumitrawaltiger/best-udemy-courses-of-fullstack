import { Link } from 'react-router-dom';
import {
  DEVOPS_INTERVIEW_QUESTIONS,
  DEVOPS_QUESTION_CATEGORIES,
  searchDevopsQuestions,
} from '../data/devopsInterviewQuestions';
import InterviewQnA from '../components/InterviewQnA';

export default function DevopsInterviewQuestions() {
  return (
    <InterviewQnA
      topicId="devops"
      tags={['DevOps', 'Interview', 'Q & A']}
      title="DevOps Interview Questions"
      subtitle={`${DEVOPS_INTERVIEW_QUESTIONS.length} DevOps interview questions with answers — fundamentals & culture, Git, CI/CD & GitOps, configuration management, containers & Kubernetes, cloud & IaC, monitoring & logging, security (DevSecOps), SRE & reliability, and future trends. Click any question to reveal the answer.`}
      questions={DEVOPS_INTERVIEW_QUESTIONS}
      categories={DEVOPS_QUESTION_CATEGORIES}
      search={searchDevopsQuestions}
      downloadPdf={[
        { href: '/top-100-devops-interview-questions.pdf', label: 'Top 100 DevOps Interview Questions (PDF)' },
      ]}
      sourceNote={
        <p>
          Sourced from “Top 100 DevOps Engineer Interview Questions &amp; Answers for 2025”. Switch to{' '}
          <Link to="/java-interview-questions" className="iq-footer-link">
            Java
          </Link>{' '}
          or{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>{' '}
          interview questions, or explore the{' '}
          <Link to="/devops" className="iq-footer-link">
            DevOps track
          </Link>
          .
        </p>
      }
    />
  );
}
