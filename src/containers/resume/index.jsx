import React from "react";
import { FaGraduationCap, FaCode, FaTrophy, FaGithub, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
import './styles.scss';
import githubLogo from '../../assets/images/WhatsApp Image 2024-02-19 at 23.06.59_80a0a562.jpg';
import anotherLogo from '../../assets/images/coding-logo-design-template-vector.jpg';

const Resume = () => {
  const education = [
    {
      institution: "Indian Institute of Information Technology Sri City",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      year: "2022 - 2026",
      description: "Pursuing B.Tech in CSE with focus on full-stack development and competitive programming"
    },
    {
      institution: "Narayana Group of Schools",
      degree: "Senior Secondary Education",
      year: "2020 - 2022",
      description: "Completed 12th grade with strong foundation in Mathematics and Science"
    }
  ];

  const experience = [
    {
      company: "Newton School",
      role: "Technical Intern (Interview)",
      type: "Internship",
      duration: "May 2025 - Jul 2025",
      period: "3 months",
      location: "Bengaluru, Karnataka, India · Remote",
      skills: ["Algorithms", "Mathematics", "Technical Interviews"]
    },
    {
      company: "ChaturaIT Learnings",
      role: "DSA Problem Setter Intern",
      type: "Part-time",
      duration: "Jul 2024 - Sep 2024",
      period: "3 months",
      location: "Hyderabad, Telangana, India · Remote",
      skills: ["Algorithms", "Python", "Data Structures", "Problem Solving"]
    }
  ];

  const projects = [
    {
      title: "HIVE (A community driven discussion platform)",
      description: "HIVE is a web application designed to create an interactive community platform, focusing on creating and sharing posts called 'buzzes' within specific communities known as 'buzzspaces'. Buzzspaces are categorized for organization.",
      githubLink: "https://github.com/HIVE-FSD/Website",
      logo: githubLogo,
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Pro Elevate",
      description: "Developed a coding practice platform for third-year students, featuring a blog for community Q&A, gamification elements like leaderboards and badges, and deployment with Node.js, Express.js, and MongoDB for scalable performance.",
      githubLink: "https://github.com/Vitesh21/Pro-Elevate",
      logo: anotherLogo,
      tech: ["Node.js", "Express.js", "MongoDB", "Gamification"]
    },
    {
      title: "SQL Chatbot",
      description: "An intelligent chatbot that converts natural language queries into SQL commands, making database interactions more intuitive and accessible. Built with modern NLP techniques to understand and process user queries effectively.",
      githubLink: "https://github.com/Vitesh21/sql-chatbot",
      logo: githubLogo,
      tech: ["Python", "NLP", "SQL", "AI/ML"]
    },
    {
      title: "Fashion Corner",
      description: "A modern e-commerce platform for fashion enthusiasts. Features a sleek user interface, product catalog, shopping cart functionality, and responsive design for seamless shopping experience across all devices.",
      githubLink: "https://github.com/Vitesh21/fashion-corner",
      liveLink: "https://fashion-corner.vercel.app/",
      logo: anotherLogo,
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"]
    }
  ];

  const achievements = [
    {
      title: "JEE Advanced Qualified",
      description: "Qualified for JEE Advanced exam out of 1.5 lakh students",
      icon: "🎯"
    },
    {
      title: "Codeforces Achievement",
      description: "Ranked 6065 in Division 2 out of 30,000 participants in Codeforces",
      icon: "💻"
    },
    {
      title: "Regional Maths Olympiad",
      description: "Qualified for Regional Maths Olympiad (RMO) in 9th standard",
      icon: "🏆"
    }
  ];

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-title">
          My <span className="gradient-text">Resume</span>
        </h1>
        <p className="resume-subtitle">Education, Experience, Projects & Achievements</p>
      </div>

      {/* Education Section */}
      <section className="resume-section">
        <h2 className="resume-section__title">
          <FaGraduationCap className="resume-section__icon" />
          Education
        </h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div
              className="timeline-item glass-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-item__marker"></div>
              <div className="timeline-item__content">
                <span className="timeline-item__year">{edu.year}</span>
                <h3 className="timeline-item__title">{edu.degree}</h3>
                <p className="timeline-item__subtitle">{edu.institution}</p>
                <p className="timeline-item__description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2 className="resume-section__title">
          <FaBriefcase className="resume-section__icon" />
          Work Experience
        </h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div
              className="timeline-item glass-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-item__marker"></div>
              <div className="timeline-item__content">
                <span className="timeline-item__year">{exp.duration}</span>
                <h3 className="timeline-item__title">{exp.role}</h3>
                <p className="timeline-item__subtitle">
                  {exp.company} · {exp.type}
                </p>
                <p className="timeline-item__location">
                  📍 {exp.location}
                </p>
                <div className="timeline-item__skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2 className="resume-section__title">
          <FaCode className="resume-section__icon" />
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card glass-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card__header">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="project-card__logo"
                />
                <h3 className="project-card__title">{project.title}</h3>
              </div>

              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="project-card__tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-card__actions">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                  <FaExternalLinkAlt size={14} />
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--live"
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="resume-section">
        <h2 className="resume-section__title">
          <FaTrophy className="resume-section__icon" />
          Achievements
        </h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              className="achievement-card glass-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-card__icon">{achievement.icon}</div>
              <h3 className="achievement-card__title">{achievement.title}</h3>
              <p className="achievement-card__description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
