import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Adithyan VS</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a
                href="#home"
                className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                onClick={() => setActiveSection('projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-content">
            <div className="home-text">
              <h1>Adithyan VS</h1>
              <h2>MCA Student | Aspiring Full-Stack Developer</h2>
              <p>Building real-world web apps using MERN stack</p>
              <div className="home-buttons">
                <a href="#projects" className="btn primary-btn">View My Work</a>
                <a href="#contact" className="btn secondary-btn">Contact Me</a>
              </div>
            </div>
            <div className="home-image">
              <div className="profile-image-container">
                <img 
                  src={require('./assets/images/background.jpg')} 
                  alt="Adithyan VS" 
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Adithyan VS, an MCA student passionate about building real-world web applications. 
                I'm currently working on SwasthyaLink, a smart healthcare application that aims to revolutionize 
                how healthcare services are accessed and delivered.
              </p>
              <p>
                As an aspiring full-stack developer, I'm constantly learning and expanding my skillset in 
                technologies like React, Node.js, MongoDB, and more. I'm also interested in IoT and enjoy 
                solving practical problems through code.
              </p>
              <p>
                When I'm not coding, you can find me with a camera in hand, capturing moments as a part-time 
                photographer. I believe in continuous learning and always strive to create something awesome!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-content">
            <div className="skills-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PHP</li>
                <li>Python</li>
                <li>Django</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Arduino</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-content">
            <div className="project-card">
              <h3>SwasthyaLink</h3>
              <p>
                A smart healthcare application that connects patients with healthcare providers, 
                enabling seamless access to medical services and records.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Firebase</span>
              </div>
            </div>
            <div className="project-card">
              <h3>IoT Solutions</h3>
              <p>
                Various IoT projects using Arduino and sensors to solve practical problems in 
                different domains.
              </p>
              <div className="project-tags">
                <span className="tag">Arduino</span>
                <span className="tag">C++</span>
                <span className="tag">Sensors</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                A responsive portfolio website built with React to showcase my skills and projects.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to reach out to me through any of the following channels:</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>adithyanvs2026@mca.ajce.in</p>
                    <p>vsadithyan215@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/adithyan-v-s</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fab fa-instagram"></i>
                  <div>
                    <h4>Instagram</h4>
                    <p>__.adithyan_vs.__</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fab fa-leetcode"></i>
                  <div>
                    <h4>LeetCode</h4>
                    <p>leetcode.com/u/dwdbjl94hn</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                e.target.reset();
              }}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Adithyan VS. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/adithyan-v-s" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/__.adithyan_vs.__/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://leetcode.com/u/dwdbjl94hn/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-leetcode"></i>
            </a>
            <a href="https://github.com/adithyan-v-s" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
