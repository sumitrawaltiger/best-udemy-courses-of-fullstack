import { Link } from 'react-router-dom';
import {
  JAVA_STREAMS_PUZZLES,
  JAVA_STREAMS_CATEGORIES,
  searchJavaStreamsPuzzles,
} from '../data/javaStreamsPuzzles';
import InterviewQnA from '../components/InterviewQnA';

export default function JavaStreamsPuzzles() {
  return (
    <InterviewQnA
      topicId="java-streams"
      tags={['Java 8', 'Streams', 'Puzzles']}
      title="Java 8 Streams — Puzzles"
      subtitle={`${JAVA_STREAMS_PUZZLES.length} Java 8 Stream API interview puzzles — predict-the-output and find-the-bug style with worked solutions. Creation & basics, intermediate ops, terminal & reduce, collectors & grouping, tricky outputs, and the pitfalls (laziness, parallel, peek). Click any puzzle to reveal the solution.`}
      questions={JAVA_STREAMS_PUZZLES}
      categories={JAVA_STREAMS_CATEGORIES}
      search={searchJavaStreamsPuzzles}
      sourceNote={
        <p>
          Hand-picked Stream API puzzles that trip people up in interviews — laziness, associativity,
          short-circuiting, and the <code>peek</code>/<code>count</code> optimization. Switch to{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>
          ,{' '}
          <Link to="/react-interview-questions" className="iq-footer-link">
            React
          </Link>
          ,{' '}
          <Link to="/java-interview-questions" className="iq-footer-link">
            Java
          </Link>
          , or{' '}
          <Link to="/kafka-interview-questions" className="iq-footer-link">
            Kafka
          </Link>{' '}
          interview questions.
        </p>
      }
    />
  );
}
