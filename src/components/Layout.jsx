import { Outlet, useParams, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { discordCommunity } from '../data/syllabus';

export default function Layout() {
  const { slug } = useParams();
  const location = useLocation();
  const isMobileTrack = location.pathname.startsWith('/mobile');
  const isNextjsTrack = location.pathname.startsWith('/nextjs');
  const isPythonTrack = location.pathname.startsWith('/python');
  const isAwsTrack = location.pathname.startsWith('/aws');
  const isDevopsTrack = location.pathname.startsWith('/devops');
  const showSidebar =
    location.pathname.startsWith('/learn/') ||
    location.pathname.startsWith('/nextjs/learn/') ||
    location.pathname.startsWith('/python/learn/') ||
    location.pathname.startsWith('/aws/learn/') ||
    location.pathname.startsWith('/devops/learn/') ||
    location.pathname.startsWith('/mobile/learn/');

  const track = isMobileTrack
    ? 'mobile'
    : isDevopsTrack
      ? 'devops'
      : isAwsTrack
        ? 'aws'
        : isPythonTrack
          ? 'python'
          : isNextjsTrack
            ? 'nextjs'
            : 'thunder';

  return (
    <div
      className={`app ${isMobileTrack ? 'app-mobile' : ''} ${isNextjsTrack ? 'app-nextjs' : ''} ${isPythonTrack ? 'app-python' : ''} ${isAwsTrack ? 'app-aws' : ''} ${isDevopsTrack ? 'app-devops' : ''}`}
    >
      <Header />
      <div className={`main-layout ${showSidebar ? 'with-sidebar' : 'no-sidebar'}`}>
        {showSidebar && <Sidebar currentSlug={slug} track={track} />}
        <main className="content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        <p>
          Built with ❤️ by{' '}
          <a href="https://github.com/sumitrawal" target="_blank" rel="noopener noreferrer">
            Sumit Rawal
          </a>{' '}
          — sharing my JavaScript learning journey with the world.
        </p>
        <p className="footer-sub">
          Thunder → Next.js → React Native → Python → AWS → DevOps.
        </p>
        <p className="footer-community">
          <a href={discordCommunity} target="_blank" rel="noopener noreferrer">
            Join Coder Army on Discord
          </a>
        </p>
      </footer>
    </div>
  );
}
