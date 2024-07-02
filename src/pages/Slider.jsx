// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import image1 from '../img/BG1.png';
import image2 from '../img/BG2.png';
import image3 from '../img/BG3.png';
import './intro.css';



const images = [image1, image2, image3];

const preloadImages = (imageArray) => {
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages(images);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  };

  return (
    <div className="slider-container" style={{ position: 'relative', width: '100%', height: '100vh' ,backgroundImage :'url("https://www.transparenttextures.com/patterns/tree-bark.png")', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00916d' }}>
      <AnimatePresence>
        <motion.div
          key={images[current]}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
          style={{ width: '80%', maxWidth: '800px', height: '80%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', borderRadius: '15px', overflow: 'hidden', backgroundColor: 'white', flexDirection: 'column' }}
        >
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            style={{ width: '100%', height: '70%', objectFit: 'contain' }}
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>
              <span style={{ color: 'black' }}>Welcome </span>
              <span style={{ color: 'yellow' }}>To </span>
              <span style={{ color: 'black' }}>The  </span>
              <span style={{ color: 'purple' }}>Eye</span>
            </h2>
            <h5 style={{ fontSize: '1rem', color: 'black' }}>
              A rich experience of a safe place for your family to feel the entertainment
            </h5>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => navigate('/login')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '290px',
          padding: '10px 20px',
          fontSize: '1rem',
          border: '2px solid yellow',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <DoubleArrowIcon style={{ marginRight: hovered ? '5px' : '0' }} />
        {hovered && 'Skip'}
      </button>
    </div>
  );
};

export default Slider;