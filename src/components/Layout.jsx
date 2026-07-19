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
  const isJavaTrack = location.pathname.startsWith('/java');
  const isAwsTrack = location.pathname.startsWith('/aws');
  const isDevopsTrack = location.pathname.startsWith('/devops');
  const isK8sTrack = location.pathname.startsWith('/k8s');
  const isInterviewTrack = location.pathname.startsWith('/interview');
  const showSidebar =
    location.pathname.startsWith('/learn/') ||
    location.pathname.startsWith('/nextjs/learn/') ||
    location.pathname.startsWith('/python/learn/') ||
    location.pathname.startsWith('/java/learn/') ||
    location.pathname.startsWith('/aws/learn/') ||
    location.pathname.startsWith('/devops/learn/') ||
    location.pathname.startsWith('/k8s/learn/') ||
    location.pathname.startsWith('/interview/learn/') ||
    location.pathname.startsWith('/mobile/learn/');

  const track = isMobileTrack
    ? 'mobile'
    : isInterviewTrack
      ? 'interview'
      : isK8sTrack
        ? 'k8s'
      : isDevopsTrack
        ? 'devops'
      : isAwsTrack
        ? 'aws'
        : isJavaTrack
          ? 'java'
          : isPythonTrack
            ? 'python'
            : isNextjsTrack
              ? 'nextjs'
              : 'thunder';

  return (
    <div
      className={`app ${isMobileTrack ? 'app-mobile' : ''} ${isNextjsTrack ? 'app-nextjs' : ''} ${isPythonTrack ? 'app-python' : ''} ${isJavaTrack ? 'app-java' : ''} ${isAwsTrack ? 'app-aws' : ''} ${isDevopsTrack ? 'app-devops' : ''} ${isK8sTrack ? 'app-k8s' : ''} ${isInterviewTrack ? 'app-interview' : ''}`}
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
          <a href="https://www.credly.com/users/sumit-rawal658/badges/credly" target="_blank" rel="noopener noreferrer">
            Sumit Rawal
          </a>{' '}
          — sharing my Full LifeCycle Engineering journey with the world.
        </p>
        <p className="footer-sub">
          Agentic AI → TypeScript → Python → Java → DevOps
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
