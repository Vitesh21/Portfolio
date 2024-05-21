import React from "react";
import './styles.scss';
import githubLogo from '../../assets/images/WhatsApp Image 2024-02-19 at 23.06.59_80a0a562.jpg'; // Adjust the path to your GitHub logo image
import anotherLogo from '../../assets/images/coding-logo-design-template-vector.jpg'; // Adjust the path to your other logo image

const Resume = () => {
  const education = [
    {
      institution: "Indian Institute of Information Technology Sri City",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      year: "2022 - 2026"
    },
    {
      institution: "Narayana Group of Schools",
      degree: "Senior Secondary Education",
      year: "2020 - 2022"
    }
  ];

  const projects = [
    {
      title: "HIVE (A community driven discussion platform)",
      description: "HIVE is a web application designed to create an interactive community platform, focusing on creating and sharing posts called 'buzzes' within specific communities known as 'buzzspaces'. Buzzspaces are categorized for organization.",
      githubLink: "https://github.com/HIVE-FSD/Website", // Replace with your actual GitHub link
      logo: githubLogo
    },
    {
      title: "Pro Elevate",
      description: "Developed a coding practice platform for third-year students, featuring a blog for community Q&A, gamification elements like leaderboards and badges, and deployment with Node.js, Express.js, and MongoDB for scalable performance, enhancing coding skills and interview preparation.",
      githubLink: "https://github.com/Vitesh21/Pro-Elevate", // Replace with your actual GitHub link
      logo: anotherLogo
    }
  ];

  const achievements = [
    "Qualified for JEE Advanced exam out of 1.5 lakh students",
    "Ranked 6065 in Division 2 out of 30,000 participants in Codeforces",
    "Qualified for Regional Maths Olympiad (RMO) in 9th standard"
  ];

  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <hr />

      <div className="section">
        <h2>Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index} className="education-item">
              <p><strong>{edu.degree}</strong></p>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>
              {project.title}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={project.logo} alt="Project Logo" className="project-logo" />
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Achievements</h2>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
