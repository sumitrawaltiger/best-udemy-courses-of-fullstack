import { Link } from 'react-router-dom';
importAuthorSection from '../components/FounderSection';

export default function AboutFounder() {
  return (
    <div className="home">
      <div className="about-founder-top">
        <Link to="/" className="about-founder-back">
          ← Back to Home
        </Link>
      </div>
      <FounderSection />
    </div>
  );
}
