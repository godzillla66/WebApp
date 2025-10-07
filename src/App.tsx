import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import WaitlistForm from './components/WaitlistForm';
import DoctorForm from './components/DoctorForm';
import AmbassadorForm from './components/AmbassadorForm';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'She & Soul - Empowering Women\'s Wellness';
  }, []);

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Statistics />
      <Problem />
      <Solution />
      <Features />
      <WhyUs />
      <Team />
      <WaitlistForm />
      <DoctorForm />
      <AmbassadorForm />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
