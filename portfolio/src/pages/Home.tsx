import React from 'react';
import profilePhoto from '../profilePhoto.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
     <p>Welcome to CS601 Web Application Development Final Project</p>
      <p>Hello! I am Ozan Erol, a passionate developer with experience in web technologies.</p>
      <img src={profilePhoto} alt="Profile" />
    </div>
  );
};

export default Home;
