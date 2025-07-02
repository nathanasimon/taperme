import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/medications/:slug" element={<MedicationDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
