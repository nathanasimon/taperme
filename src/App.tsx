import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Medications from './pages/Medications';
import MedicationDetail from './pages/MedicationDetail';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Providers from './pages/Providers';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Onboarding from './pages/Onboarding';
import './App.css';

function LayoutWrapper() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/medications/:slug" element={<MedicationDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
