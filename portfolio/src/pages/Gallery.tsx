import React from 'react';
import Photo1 from '../Photo1.jpg';
import Photo2 from '../Photo2.jpg';
import Photo3 from '../Photo3.jpg';
import Photo4 from '../Photo4.jpg';

const Gallery: React.FC = () => {
  const images = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
  ];

  return (
    <div>
      <h1>Photo Gallery</h1>
      <p>A collection of photos showcasing family.</p>
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
