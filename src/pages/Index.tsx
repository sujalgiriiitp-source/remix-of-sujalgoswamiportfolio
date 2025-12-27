import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sujal Giri | Computer Science Student & Aspiring Data Analyst</title>
        <meta 
          name="description" 
          content="Portfolio of Sujal Giri - Computer Science student at AKTU & IIT Patna. Specializing in Python, Data Analytics, and Web Development. Open to internships and collaborations." 
        />
        <meta name="keywords" content="Sujal Giri, Computer Science, Data Analytics, Web Developer, Python, Portfolio, Student, IIT Patna, AKTU" />
        <meta name="author" content="Sujal Giri" />
        <meta property="og:title" content="Sujal Giri | Computer Science Student Portfolio" />
        <meta property="og:description" content="Aspiring Data Analyst & Web Developer. Currently pursuing BTech CSE at AKTU and BS CSDA at IIT Patna." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sujalgiriiitp-source.github.io/portfolio/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
