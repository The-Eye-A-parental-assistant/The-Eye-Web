import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Logo from '../img/Logo-removebg.png'; 
import './intro.css';
const Intro = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEyeOpen((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: [1, 1.2, 1], 
      rotate: 0, 
      transition: { 
        delay: 2,
        duration: 1.5, 
        type: "spring",
        stiffness: 180,
        damping: 10 
      } 
    }
  };

  const brandNameVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } }
  };

  const colorTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 4 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 10 } }
  };

  const textGradientVariants = {
    hidden: { backgroundPosition: '200% 0' },
    visible: {
      backgroundPosition: '0% 0',
      transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
    }
  };

  const textAnimation = (text) => {
    return text.split('').map((char, index) => (
      <motion.span 
        key={index} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 + index * 0.1 }}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <div className="intro-background">
      <motion.img
        src={Logo}
        alt="Logo"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '300px', height: '300px', borderRadius: '50%', marginTop: '10px' }}
      />
      <motion.h1
        variants={brandNameVariants}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: '20px',
          fontSize: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          color: '#F6E9B2',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}
      >
        THE EYE
      </motion.h1>
      <motion.h2
        variants={colorTextVariants}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: '20px',
          fontSize: '3rem',
          // background: 'linear-gradient(90deg, #EE4E4E, #FA7070, #FFA27F, #FEFDED, #A8CD9F, #58A399, #496989, #124076)',
          // backgroundClip: 'text',
          // animation: 'gradient 4s ease infinite',
          color: '#F6E9B2',
          // backgroundSize: '200%'
        }}
      >
        {/* <motion.span variants={textGradientVariants} initial="hidden" animate="visible"> */}
          {("Guardians of your child's digital journey – secure, safe, and smart.")}
        {/* </motion.span> */}
      </motion.h2>
      <motion.button
        variants={buttonVariants} 
        initial="hidden"
        animate="visible"
        style={{ marginTop: '20px', padding: '15px 30px', fontSize: '1.2rem' }}
      >
        Sign up
      </motion.button>
      <div style={{ marginTop: '40px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 6 }}
          style={{ width: '100px', height: '100px' }}
        >
          {isEyeOpen ? (
            <svg viewBox="0 0 512 512" style={{ width: '100px', height: '100px' }}>
              <g>
                <path
                  d="M256,128C128,128,32,256,32,256s96,128,224,128s224-128,224-128S384,128,256,128z M256,336c-44.183,0-80-35.817-80-80
                  s35.817-80,80-80s80,35.817,80,80S300.183,336,256,336z"
                  
                />
                <circle cx="256" cy="256" r="48"  />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 512 512" style={{ width: '100px', height: '100px' }}>
              <g>
                <path
                  d="M256,128C128,128,32,256,32,256s96,128,224,128s224-128,224-128S384,128,256,128z M160,256c0,53.019,42.981,96,96,96
                  s96-42.981,96-96H160z"
                  
                />
                <rect x="208" y="208" width="96" height="96"  />
              </g>
            </svg>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;




//"Guardians of your child's digital journey – secure, safe, and smart."