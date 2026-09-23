import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeAdminPanel from './components/ResumeAdminPanel';

// Admin mode: visit /admin to access the upload panel
// e.g. http://localhost:5173/admin  (or yoursite.com/admin)
const isAdmin = window.location.pathname === '/admin';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Admin-only: Resume PDF upload panel — hidden from normal visitors */}
      {isAdmin && <ResumeAdminPanel />}
    </div>
  );
}

export default App;
