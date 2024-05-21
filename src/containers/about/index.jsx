import React from "react";
import './styles.scss';

const About = () => {
  return ( 
    <div className="about-container">
      <h1>About Me</h1>
      <hr />
      <div className="content-container">
        <div className="text-container">
          <h2>Fullstack Experience</h2>
          <p>I am proficient in MySQL, MongoDB, React.js, HTML, CSS, and JavaScript. With expertise in full-stack development, I deliver efficient web solutions. My skills extend to database management, front-end design, and back-end scripting, ensuring versatile and high-quality software products.</p>
         
          <h2>Competitive Programming</h2>
          <p>I have strong skills in competitive programming and usually code in C++ and Python.</p>
          <ul>
            <li><a href="https://codeforces.com/profile/viteshlomada" target="_blank" rel="noopener noreferrer">Codeforces Profile</a></li>
            <li><a href="https://leetcode.com/u/vitesh23/" target="_blank" rel="noopener noreferrer">Leetcode Profile</a></li>
          </ul>
          <h2>Personal Info</h2>
          <hr />
          <p><strong>Name:</strong> Vitesh reddy</p>
          <p><strong>Age:</strong> 19</p>
          <p><strong>Address:</strong> 3/155-1,Prakash nagar,Y.M.R colony , proddatur,Andhra Pradesh</p>
          <p><strong>Email:</strong> viteshlomada@gmail.com</p>
          <p><strong>Contact No:</strong> (123) 456-7890</p>
        </div>
        <div className="image-container">
          <img src="https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?w=560&ssl=1" alt="Profile" />
        </div>
      </div>
    </div>
  );
}
 
export default About;
