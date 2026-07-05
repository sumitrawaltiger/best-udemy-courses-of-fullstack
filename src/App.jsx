import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NextjsHome from './pages/NextjsHome';
import PythonHome from './pages/PythonHome';
import AwsHome from './pages/AwsHome';
import JavaHome from './pages/JavaHome';
import DevopsHome from './pages/DevopsHome';
import K8sHome from './pages/K8sHome';
import InterviewHome from './pages/InterviewHome';
import MobileHome from './pages/MobileHome';
import Chapter from './pages/Chapter';
import Day001 from './pages/Day001';
import Day002 from './pages/Day002';
import Day003 from './pages/Day003';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/day-001" element={<Day001 />} />
        <Route path="/day-002" element={<Day002 />} />
        <Route path="/day-003" element={<Day003 />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn/:slug" element={<Chapter />} />
          <Route path="nextjs" element={<NextjsHome />} />
          <Route path="nextjs/learn/:slug" element={<Chapter track="nextjs" />} />
          <Route path="python" element={<PythonHome />} />
          <Route path="python/learn/:slug" element={<Chapter track="python" />} />
          <Route path="java" element={<JavaHome />} />
          <Route path="java/learn/:slug" element={<Chapter track="java" />} />
          <Route path="aws" element={<AwsHome />} />
          <Route path="aws/learn/:slug" element={<Chapter track="aws" />} />
          <Route path="devops" element={<DevopsHome />} />
          <Route path="devops/learn/:slug" element={<Chapter track="devops" />} />
          <Route path="k8s" element={<K8sHome />} />
          <Route path="k8s/learn/:slug" element={<Chapter track="k8s" />} />
          <Route path="interview" element={<InterviewHome />} />
          <Route path="interview/learn/:slug" element={<Chapter track="interview" />} />
          <Route path="mobile" element={<MobileHome />} />
          <Route path="mobile/learn/:slug" element={<Chapter track="mobile" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
