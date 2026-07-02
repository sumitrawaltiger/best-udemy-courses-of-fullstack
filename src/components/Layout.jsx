import { Outlet, useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  const { slug } = useParams();

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar currentSlug={slug} />
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
          Day-by-day tutorials for absolute beginners. More chapters coming soon!
        </p>
      </footer>
    </div>
  );
}
