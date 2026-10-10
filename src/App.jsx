import { useEffect, useState } from "react";
import "./index.css";

const roles = [
  "Frontend Web Developer",
  "JavaScript Learner",
  "HTML & CSS Specialist",
  "Problem Solver",
];

const projects = [
  {
    number: "01",
    title: "Hospital System",
    description:
      "A patient management application built to organize patient records and appointment-related information.",
    stack: ["TypeScript", "Vite", "Local Storage"],
    link: "https://github.com/khanzadamohsin/Hospital-System",
  },
  {
    number: "02",
    title: "Student Management System",
    description:
      "A web application for managing student information through a clean and easy-to-use interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/khanzadamohsin/Student-Management-System",
  },
  {
    number: "03",
    title: "Weather App",
    description:
      "A responsive weather-focused web project created with a modern React and Vite setup.",
    stack: ["React", "JavaScript", "Vite"],
    link: "https://github.com/khanzadamohsin/First-Weather-App",
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4.5c-.5-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.3v3H5.5v3.9h3.2V21h4v-4.5h3.3l.5-3.9h-3.8v-2.6c0-1.1.3-1.9 1.3-1.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle className="instagram-dot" cx="17.3" cy="6.8" r="1" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.3 8.4A2.1 2.1 0 1 0 6.3 4.2a2.1 2.1 0 0 0 0 4.2ZM4.5 9.8h3.6V20H4.5V9.8Zm5.7 0h3.5v1.4h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V20h-3.6v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V20h-3.6V9.8Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-2.8 17.6c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.7-.9-3.7-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.2.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.5.7.5 1.3v1.9c0 .2.1.5.5.4A9 9 0 0 0 12 3Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-4.9-6.1L6.7 21H3.6l7.2-8.2L3 3h6.4l4.4 5.6L18.9 3Zm-1.1 15.9h1.7L8.4 4.9H6.6l11.2 14Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 11 8-7 8 7" />
      <path d="M6.5 10v9h11v-9" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20c.7-3.6 2.9-5.4 6.5-5.4s5.8 1.8 6.5 5.4" />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
      <path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  );
}

function CodeIllustration() {
  return (
    <div className="animated-code-scene">
      <div className="scene-glow" />

      <div className="floating-orbit orbit-a" />
      <div className="floating-orbit orbit-b" />

      <div className="code-window">
        <div className="window-bar">
          <span className="window-dot pink" />
          <span className="window-dot yellow" />
          <span className="window-dot green" />
        </div>

        <div className="code-lines">
          <div className="code-row row-a">
            <span className="code-purple">const</span>
            <span className="code-white"> developer </span>
            <span className="code-pink">=</span>
            <span className="code-white"> {"{"}</span>
          </div>

          <div className="code-row row-b">
            <span className="indent" />
            <span className="code-blue">name:</span>
            <span className="code-cyan"> "Mohsin Khan"</span>
          </div>

          <div className="code-row row-c">
            <span className="indent" />
            <span className="code-blue">role:</span>
            <span className="code-cyan"> "Developer"</span>
          </div>

          <div className="code-row row-d">
            <span className="indent" />
            <span className="code-blue">skills:</span>
            <span className="code-pink"> [</span>
            <span className="code-cyan">"React"</span>
            <span className="code-pink">]</span>
          </div>

          <div className="code-row row-e">
            <span className="indent" />
            <span className="code-blue">status:</span>
            <span className="code-green"> "Building"</span>
          </div>

          <div className="code-row row-f">
            <span className="code-white">{"};"}</span>
          </div>
        </div>

        
      </div>

     
      

      

    </div>
  );
}

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const hasFinishedTyping =
      !isDeleting && typedRole === currentRole;

    const hasFinishedDeleting =
      isDeleting && typedRole === "";

    const speed = hasFinishedTyping
      ? 1400
      : isDeleting
      ? 55
      : 95;

    const timer = setTimeout(() => {
      if (hasFinishedTyping) {
        setIsDeleting(true);
        return;
      }

      if (hasFinishedDeleting) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setTypedRole(
        isDeleting
          ? currentRole.slice(0, typedRole.length - 1)
          : currentRole.slice(0, typedRole.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <div
      className={`site-shell ${
        isLightTheme ? "light-theme" : ""
      }`}
    >
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          MK<span>.</span>
        </a>

        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="github-link"
          href="https://github.com/khanzadamohsin"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <aside className="side-nav">
        <button
          className="theme-toggle"
          onClick={() => setIsLightTheme(!isLightTheme)}
          aria-label="Change theme"
        >
          {isLightTheme ? "☀" : "☾"}
        </button>

        <a
          className="active-nav"
          href="#home"
          title="Home"
        >
          <HomeIcon />
        </a>

        <a href="#about" title="About">
          <UserIcon />
        </a>

        <a href="#skills" title="Skills">
          <SkillsIcon />
        </a>

        <a href="#projects" title="Projects">
          <ProjectsIcon />
        </a>

        <a href="#contact" title="Contact">
          <MailIcon />
        </a>
      </aside>

      <main>
        <section className="hero section-space" id="home">
          <div className="hero-copy">
            <p className="section-kicker">
              WELCOME TO MY DIGITAL SPACE
            </p>

            <h1>
              Hi, I&apos;m <span>Mohsin</span>
              <br />
              Khan.
            </h1>

            <p className="animated-role">
              <span className="role-dot" />
              {typedRole}
              <span className="cursor">|</span>
            </p>

            <p className="hero-description">
              I build clean user interfaces, practical web
              applications, and digital experiences that are
              simple, responsive, and enjoyable to use.
            </p>

            <div className="hero-actions">
              <a
                className="button primary-button"
                href="#projects"
              >
                Explore my work <span>→</span>
              </a>

              <a
                className="button ghost-button"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV <span>↓</span>
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://www.facebook.com/mohsin.khan752murshad/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/mohsin-khan-2566932a7/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://github.com/khanzadamohsin"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <GithubIcon />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://www.instagram.com/mohsinkhan_khail/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <CodeIllustration />

            
          </div>
        </section>

        <section className="about section-space" id="about">
          <div className="profile-card">
            <div className="profile-card-top">
              <div className="profile-photo-wrap">
                <div className="mini-photo">
                  <img
                    src="/mohsin-khan.jpg"
                    alt="Mohsin Khan"
                  />
                </div>

                <span
                  className="availability-dot"
                  title="Available for internships and projects"
                />
              </div>

              <h3>Mohsin Khan</h3>
              <p>(Web Developer)</p>
            </div>

            <div className="profile-card-bottom">
              <div>
                <span>LOCATION</span>
                <strong>Rawalpindi, Pakistan</strong>
              </div>

              <div>
                <span>EDUCATION</span>
                <strong>BS Software Engineering</strong>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-kicker">
              01 / ABOUT ME
            </p>

            <h2>
              Building with purpose, learning without limits.
            </h2>

            <p>
              I am a driven Software Engineering student with a
              passion for technology, web development, and
              continuous self-improvement. I enjoy designing
              complete applications from idea to deployment,
              combining analytical thinking with practical
              execution.
            </p>

            <p>
              I am adaptable, goal-oriented, and eager to
              contribute my technical skills to meaningful
              projects while growing as a professional frontend
              developer.
            </p>

            <div className="experience-box">
              <span>EXPERIENCE</span>
              <h3>Frontend Development Intern</h3>
              <p>Ovex Technologies · 2-month internship</p>
            </div>

            <a
              className="text-link"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View my resume <span>↗</span>
            </a>
          </div>
        </section>

        <section className="skills section-space" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                02 / TOOLKIT
              </p>

              <h2>
                Skills I use to bring ideas to life.
              </h2>
            </div>

            <p>
              A focused set of tools for building clean
              websites, collaborating effectively, and
              continuously improving.
            </p>
          </div>

          <div className="skills-grid">
            <article>
              <span>01</span>
              <h3>Frontend</h3>
              <p>
                HTML5 · CSS3 · JavaScript · Responsive Design
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Tools</h3>
              <p>
                Git · GitHub · VS Code · Vite · Canva
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Strengths</h3>
              <p>
                Collaboration · Problem Solving ·
                Communication · Attention to Detail
              </p>
            </article>
          </div>
        </section>

        <section
          className="projects section-space"
          id="projects"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                03 / SELECTED WORK
              </p>

              <h2>
                Projects that show my growth.
              </h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/khanzadamohsin"
              target="_blank"
              rel="noreferrer"
            >
              See all GitHub repositories <span>↗</span>
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>CASE STUDY</span>
                </div>

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="project-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact section-space"
          id="contact"
        >
          <p className="section-kicker">
            04 / CONTACT
          </p>

          <h2>
            Let&apos;s create something
            <br />
            <span>worth remembering.</span>
          </h2>

          <p>
            I am currently looking for frontend
            opportunities, internships, and exciting projects
            to work on.
          </p>

          <div className="contact-actions">
            <a
              className="button primary-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khanzadamohsin12@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me an email <span>→</span>
            </a>

            <a
              className="button ghost-button"
              href="https://www.linkedin.com/in/mohsin-khan-2566932a7/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © 2026 Mohsin Khan. Designed and built with React.
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}