import React from 'react';
import profilePhoto from '../profilePhoto.jpg';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>Certified as an OCA Java SE 8 Programmer with over many years of experience in the field, I have proven expertise in Test Automation and Quality Assurance in Web and Client-Server applications. Currently pursuing a Master's Degree in Software Development at Boston University to advance my knowledge and skills. Demonstrated experience performing a range of Automation Testing techniques, including Functional, System, Smoke, Regression, E2E Testing, and User Acceptance Testing (UAT). Highly proficient in Automating Web Service Applications in BDD (Behavioral Driven Development), DDT (Data Driven Testing), and Hybrid Frameworks, utilizing Cucumber (using Gherkin) and TestNG. Skilled as a Full-Stack tester with experience in both Front-end and Back-end testing, as well as Mobile testing. Hands-on experience working with Linux systems and Unix Bash Script. Expertise in designing and developing automation frameworks from scratch using Cyress, JavaScript / Maven, Java, Selenium, WebDriver, Cucumber, JUnit, TestNG, and Gherkin. Proficient in working with XLR and other automation tools for Continuous Deployment. Highly skilled in Object-Oriented Programming with Java, as well as Functional Programming with JavaScript/Typescript. Proven expertise in writing SQL queries, SQL scripts, and performing Database Testing in different RDBMS such as PostgreSQL, Snowflake, and MySQL. Expertise in testing Web Services (REST) with Automation Testing using Rest Assured library, Apache Http Client, and Mocha. Experience in working with AWS and CI/CD using Jenkins/CircleCi, as well as configuring build, triggers, and post-build actions.</p>
      <p>Interests: Reading, hiking, coding, and exploring new places.</p>
      <img src={profilePhoto} alt="Personal" />
    </div>
  );
};

export default About;
