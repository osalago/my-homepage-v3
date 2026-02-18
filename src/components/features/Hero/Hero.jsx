import { HiArrowRight } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Dr. Oliver Sala</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer & Designer | Machine Learning Engineer | Research Scientist | Quantum Chemist </h2>
          <p className="hero-description">
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code, user experience,
            and continuous learning.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <HiArrowRight className="btn-icon" />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-avatar-wrapper">
            <img
              src="https://api.dicebear.com/7.x/personas/svg?seed=Mark&backgroundColor=b6e3f4"
              alt="Dr. Oliver Sala"
              className="hero-avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
