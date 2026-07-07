import { Link } from 'react-router-dom';
import {
  SQL_QUERY_PUZZLES,
  SQL_QUERY_CATEGORIES,
  searchSqlQueryPuzzles,
} from '../data/sqlQueryPuzzles';
import InterviewQnA from '../components/InterviewQnA';

export default function SqlQueryPuzzles() {
  return (
    <InterviewQnA
      topicId="sql"
      tags={['SQL', 'Queries', 'Puzzles']}
      title="Tricky SQL Queries"
      subtitle={`${SQL_QUERY_PUZZLES.length} tricky SQL interview questions with worked query solutions — self-joins & anti-joins, aggregation & grouping, window functions, subqueries & CTEs, the NULL gotchas, and classic puzzles (Nth highest, duplicates, consecutive rows, median, gaps-and-islands). Click any question to reveal the query.`}
      questions={SQL_QUERY_PUZZLES}
      categories={SQL_QUERY_CATEGORIES}
      search={searchSqlQueryPuzzles}
      sourceNote={
        <p>
          The SQL queries interviewers reach for — three-valued logic, <code>NOT IN</code> with NULLs,
          window functions, and the gaps-and-islands pattern. Switch to{' '}
          <Link to="/interview-questions" className="iq-footer-link">
            JavaScript
          </Link>
          ,{' '}
          <Link to="/java-interview-questions" className="iq-footer-link">
            Java
          </Link>
          ,{' '}
          <Link to="/java-streams-puzzles" className="iq-footer-link">
            Java 8 Streams
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
