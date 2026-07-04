import { Outlet, useParams, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { discordCommunity } from '../data/syllabus';

export default function Layout() {
  const { slug } = useParams();
  const location = useLocation();
  const isMobileTrack = location.pathname.startsWith('/mobile');
  const showSidebar =
    location.pathname.startsWith('/learn/') ||
    location.pathname.startsWith('/mobile/learn/');

  return (
    <div className={`app ${isMobileTrack ? 'app-mobile' : ''}`}>
      <Header />
      <div className={`main-layout ${showSidebar ? 'with-sidebar' : 'no-sidebar'}`}>
        {showSidebar && (
          <Sidebar currentSlug={slug} track={isMobileTrack ? 'mobile' : 'thunder'} />
        )}
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
          Day-by-day tutorials for absolute beginners. Thunder++ React Native after 100 days!
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
