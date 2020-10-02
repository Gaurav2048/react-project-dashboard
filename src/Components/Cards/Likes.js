import React from 'react';

const Likes = () => {
  const images = [
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2120114/pexels-photo-2120114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2100035/pexels-photo-2100035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ];
  return (
    <div className="like-container">
      {images.map((image, index) => (
        <img
          className="like-img"
          src={image}
          alt=""
          style={{ marginLeft: index === 0 ? '0px' : '-10px' }}
        />
      ))}
      <span className="like-count">+9</span>
    </div>
  );
};

export default Likes;
