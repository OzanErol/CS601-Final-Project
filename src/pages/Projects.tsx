import React from 'react';

const Projects: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <h3>Project 1: Host Manager (Mastercard)</h3>
        <p>A project aiming to manage the production hosts. Giving ability to create/start/stop hosts based on the given configurations</p>
        <p>Technologies: Java, SpringBoot, Shell, GridDB</p>
      </div>
      <div>
        <h3>Project 2: Gatekeeper (Visa)</h3>
        <p>A gatekeeper project providing authentication and authorization for all the Rest calls coming to Visa</p>
         <p>Technologies: Java, Vertx, TestNG, Oracle DB</p>
      </div>
    </div>
  );
};

export default Projects;
