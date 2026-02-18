import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useScrollSpy } from '../../../hooks';
import { useThemeStore } from '../../../store';
import './Header.css';
import { FaGoogleScholar } from 'react-icons/fa6';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/osalago',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/oliversala/',
    label: 'LinkedIn',
  },
  {
    icon: FaGoogleScholar,
    href: 'https://scholar.google.com/citations?user=4V-m6ZcAAAAJ&hl=de',
    label: 'GoogleScholar',
  },
];

const Header = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const activeSection = useScrollSpy(['home', 'projects', 'contact'], 150);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Oliver Sala's Homepage
        </a>

        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                  <span className="nav-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <HiSun /> : <HiMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
