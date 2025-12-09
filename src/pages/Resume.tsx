import React from 'react';
import resumeFile from '../Ozan_EROL_RESUME.docx';

const Resume: React.FC = () => {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Ozan Erol</h2>
      <p>ozan.erol@bu.edu | Phone: (123) 456-7890</p>
      <h3>Education</h3>
      <p>Master of Software Development, [Boston University], [2005]</p>
      <h3>Experience</h3>
      <p>Sr Software Engineer, [Mastercard], [2022-2022]</p>
      <p>Sr Software Engineer, [Aspiration], [2022-2024]</p>
      <p>Sr Software Engineer, [Visa], [2024- Present]</p>
      <h3>Skills</h3>
      <ul>
        <li>HTML5, CSS3, JavaScript, Java</li>
        <li>React, Node.js</li>
        <li>Version Control: Git</li>
        <li>Database: Oracle, MySQL, PostgreSQL, Snowflake</li>
      </ul>
      <p>Download full resume: <a href={resumeFile} download="Ozan_EROL_RESUME.docx"><button>Download Resume</button></a></p>
    </div>
  );
};

export default Resume;
