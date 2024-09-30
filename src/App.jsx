import React from 'react';
import { MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined, GlobalOutlined, ProjectOutlined, BookOutlined, CodeOutlined, TrophyOutlined } from '@ant-design/icons';
import './App.css';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Satyam Yadav</h1>
      <p>White Field, Bangalore</p>
      <p className="contact-info" style={{ display: 'flex', flexWrap: 'wrap' }}>
  <div><PhoneOutlined /> <strong>Phone:</strong> +91-8305213333 </div>
  <div> 
    <MailOutlined /> <strong>Email:</strong> <a href="mailto:sy73109628@gmail.com">sy73109628@gmail.com</a>
  </div>
  <div> 
    <LinkedinOutlined /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/satyam-yadav-407327244/">Satyam Yadav </a>
  </div>
  <div> 
    <GithubOutlined /> <strong>GitHub:</strong> <a href="https://github.com/VisionPro111">VisionPro111</a>
  </div>
  <div>
    <GlobalOutlined /> <strong>Portfolio:</strong> <a href="https://satyamyadavjee.netlify.app/">Website </a>
  </div>
</p>


      <h2><BookOutlined /> Education</h2>
      <p style={{ display: 'flex', flexDirection: 'row' }}>
       <div style={{width: '50%'}}> <strong>G L Bajaj Institute Of Technology, Greater Noida (2022 – 2024)</strong> </div>
        <div style={{width: '50%'}}>MCA -Master in Computer Application <br/>
        CGPA: 7.4 <br/>
        Greater Noida, Uttar Pradesh</div>
      </p>

      <h2><CodeOutlined /> Coursework / Skills</h2>
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.Js</li>
        <li>MongoDB</li>
        <li>React.js</li>
        <li>Java</li>
        <li>Cloud Computing</li>
        <li>Software Engineering</li>
      </ul>

      <h2><ProjectOutlined /> Experience</h2>
      <p style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
        <strong>OGPM Groups Pvt. Ltd. (Nov 2023 - Aug 2024)</strong> 
        </div>
        <div style={{position: 'absolute', right: '12rem'}}>
        Role: Software Developer <br />
        Location: Noida, Uttar Pradesh
        </div>
      </p>
      <ul>
        <li>Learned and implemented ERP application.</li>
        <li>Worked on various projects using different coding methodologies.</li>
        <li>Developed a user-friendly web application.</li>
        <li>Implemented user authentication and search functionality.</li>
        <li>Handled the database and created a responsive front-end using HTML, CSS, JavaScript, Express.js, React.js, Mongoose, Node.js, and MySQL.</li>
      </ul>

      <h2><ProjectOutlined /> Projects</h2>
      <h3>Blood Bank App (2024)</h3>
      <p>React, JavaScript, CSS, Node.js, Express, MongoDB, IDE: VS Code</p>
      <ul>
        <li>Web application built with Express.js and MongoDB, featuring CRUD operations for managing donor and seeker profiles.</li>
        <li>Location-based blood search using Google Maps API.</li>
        <li>Backend powered by Node.js and Express.js for database management.</li>
      </ul>

      <h3>Weather App (2023-24)</h3>
      <p>React Native, JavaScript, Tailwind, OpenWeather API, CSS</p>
      <ul>
        <li>Cross-platform mobile app providing weather forecasts using React Native.</li>
        <li>Integrated OpenWeather API to fetch real-time weather data for any location.</li>
        <li>Geolocation-based search and manual city input for weather updates.</li>
        <li>Graphical representation of weather patterns like temperature and precipitation.</li>
      </ul>

      <h2><CodeOutlined /> Technical Skills</h2>
      <ul>
        <li>Languages: Java, JavaScript, SQL</li>
        <li>Technologies/Frameworks: HTML5, CSS3, React, MongoDB, Express, JavaScript, NodeJS, Bootstrap, AntD</li>
        <li>Developer Tools: VS Code, IntelliJ, Canva, Figma</li>
      </ul>

      <h2><TrophyOutlined /> Coding Platforms</h2>
      <ul>
        <li>Solved 30+ Problems on Leetcode.</li>
        <li>Solved 200+ Problems across GeeksforGeeks and InterviewBit.</li>
      </ul>

      <h2><TrophyOutlined /> Certifications</h2>
      <ul>
        <li>Certificate of Virtual Internship</li>
        <li>Java Object-Oriented Programming</li>
        <li>MERN Stack Developer</li>
      </ul>

      <h2><TrophyOutlined /> Extracurricular</h2>
      <p>Taught basic Java/DSA in offline mode (May 2023 – Dec 2024)</p>
    </div>
  );
};

export default App;