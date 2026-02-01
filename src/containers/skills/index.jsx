import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaJava
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiMysql, SiCplusplus, SiC
} from "react-icons/si";
import './styles.scss';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const frontendSkills = [
    { name: "HTML", level: 90, icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", level: 85, icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", level: 80, icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "React.js", level: 75, icon: <FaReact />, color: "#61DAFB" }
  ];

  const backendSkills = [
    { name: "Node.js", level: 80, icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", level: 75, icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", level: 60, icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", level: 70, icon: <SiMysql />, color: "#4479A1" }
  ];

  const languages = [
    { name: "Python", level: 65, icon: <FaPython />, color: "#3776AB" },
    { name: "C++", level: 80, icon: <SiCplusplus />, color: "#00599C" },
    { name: "C", level: 75, icon: <SiC />, color: "#A8B9CC" },
    { name: "Java", level: 60, icon: <FaJava />, color: "#007396" }
  ];

  const courses = [
    "Full Stack Development",
    "Data Structures and Algorithms",
    "Computer Architecture",
    "Discrete Algebra",
    "OOPS (Object Oriented Programming)",
    "DBMS (Database Management System)"
  ];

  const renderSkillCard = (skill, index, category) => (
    <div
      className="skill-card glass-card"
      key={index}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-card__header">
        <div className="skill-card__icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <div className="skill-card__info">
          <h3 className="skill-card__name">{skill.name}</h3>
          <span className="skill-card__category">{category}</span>
        </div>
      </div>

      <div className="skill-card__progress-container">
        <div
          className="skill-card__progress-bar"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}, var(--accent-purple))`
          }}
        >
          <span className="skill-card__progress-glow"></span>
        </div>
      </div>

      <div className="skill-card__level">
        <span className="skill-card__percentage">
          {isVisible ? skill.level : 0}%
        </span>
      </div>
    </div>
  );

  return (
    <div className="skills-container" ref={skillsRef}>
      <div className="skills-header">
        <h1 className="skills-title">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="skills-subtitle">Technologies I work with</p>
      </div>

      <div className="skills-content">
        {/* Frontend Skills */}
        <div className="skills-section">
          <h2 className="skills-section__title">
            <span className="skills-section__icon">🎨</span>
            Frontend Development
          </h2>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) =>
              renderSkillCard(skill, index, "Frontend")
            )}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-section">
          <h2 className="skills-section__title">
            <span className="skills-section__icon">⚙️</span>
            Backend Development
          </h2>
          <div className="skills-grid">
            {backendSkills.map((skill, index) =>
              renderSkillCard(skill, index, "Backend")
            )}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="skills-section">
          <h2 className="skills-section__title">
            <span className="skills-section__icon">💻</span>
            Programming Languages
          </h2>
          <div className="skills-grid">
            {languages.map((skill, index) =>
              renderSkillCard(skill, index, "Language")
            )}
          </div>
        </div>

        {/* Courses */}
        <div className="skills-section skills-section--full">
          <h2 className="skills-section__title">
            <span className="skills-section__icon">📚</span>
            Courses & Certifications
          </h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div
                className="course-card glass-card"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="course-card__check">✓</div>
                <p className="course-card__name">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
