import React, { useState } from 'react';
import Background from '../../components/backgrounds/Background';
import './Landing_Page.css';

const Landing_Page = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = () => setHovered(true);
  const handleLeave = () => setHovered(false);
  const handleClick = () => setClicked(true);

  return (
    <>
      <img
        className={`logo logo1 ${hovered ? 'hovered' : ''} ${clicked ? 'fall-left' : ''}`}
        src="/icons/iconLeft.png"
        alt="logo1"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
      <img
        className={`logo logo2 ${hovered ? 'hovered' : ''} ${clicked ? 'fall-right' : ''}`}
        src="/icons/iconRight.png"
        alt="logo2"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
      <h1 className="MT">HEALTH BOX</h1>
      <Background />
    </>
  );
};

export default Landing_Page;
