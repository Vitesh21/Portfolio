import React from "react";
import './styles.scss';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 60 },
    { name: "MySQL", level: 70 }
  ];

  const languages = [
    { name: "Python", level: 65 },
    { name: "C++", level: 80 },
    { name: "C", level: 75 },
    { name: "Java", level: 60 }
  ];

  const courses = [
    "Full Stack Development",
    "Data Structures and Algorithms",
    "Computer Architecture",
    "Discrete Algebra",
    "OOPS (Object Oriented Programming)",
    "DBMS (Database Management System)"
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <hr />
      <div className="skill-categories">
        <div className="skill-category">
          <h2>Frontend</h2>
          {frontendSkills.map((skill, index) => (
            <div className="progress-container" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%`, "--skill-level": `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h2>Backend</h2>
          {backendSkills.map((skill, index) => (
            <div className="progress-container" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%`, "--skill-level": `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h2>Languages</h2>
          {languages.map((skill, index) => (
            <div className="progress-container" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%`, "--skill-level": `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="courses">
        <h2>Courses:</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
