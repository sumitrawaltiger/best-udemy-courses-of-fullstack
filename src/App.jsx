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
import Day004 from './pages/Day004';
import Day005 from './pages/Day005';
import Day006 from './pages/Day006';
import Day007 from './pages/Day007';
import Day008 from './pages/Day008';
import Day009 from './pages/Day009';
import Day010 from './pages/Day010';
import Day011 from './pages/Day011';
import Day012 from './pages/Day012';
import Day013 from './pages/Day013';
import Day014 from './pages/Day014';
import Day015 from './pages/Day015';
import Day016 from './pages/Day016';
import Day017 from './pages/Day017';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/day-001" element={<Day001 />} />
        <Route path="/day-002" element={<Day002 />} />
        <Route path="/day-003" element={<Day003 />} />
        <Route path="/day-004" element={<Day004 />} />
        <Route path="/day-005" element={<Day005 />} />
        <Route path="/day-006" element={<Day006 />} />
        <Route path="/day-007" element={<Day007 />} />
        <Route path="/day-008" element={<Day008 />} />
        <Route path="/day-009" element={<Day009 />} />
        <Route path="/day-010" element={<Day010 />} />
        <Route path="/day-011" element={<Day011 />} />
        <Route path="/day-012" element={<Day012 />} />
        <Route path="/day-013" element={<Day013 />} />
        <Route path="/day-014" element={<Day014 />} />
        <Route path="/day-015" element={<Day015 />} />
        <Route path="/day-016" element={<Day016 />} />
        <Route path="/day-017" element={<Day017 />} />
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
