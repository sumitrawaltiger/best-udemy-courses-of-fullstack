import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NextjsHome from './pages/NextjsHome';
import MobileHome from './pages/MobileHome';
import Chapter from './pages/Chapter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn/:slug" element={<Chapter />} />
          <Route path="nextjs" element={<NextjsHome />} />
          <Route path="nextjs/learn/:slug" element={<Chapter track="nextjs" />} />
          <Route path="mobile" element={<MobileHome />} />
          <Route path="mobile/learn/:slug" element={<Chapter track="mobile" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
