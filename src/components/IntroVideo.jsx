import React, { useRef } from 'react';
import videoSrc from '../assets/Technology_Startup_Intro_Animation_Created.mp4';
import { SkipForward } from 'lucide-react';
import { motion } from 'framer-motion';

const IntroVideo = ({ onComplete }) => {
  const MotionDiv = motion.div;
  const videoRef = useRef(null);

  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: '100vh',
        width: '100vw',
        background: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <video 
        ref={videoRef}
        autoPlay 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onEnded={onComplete}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <button 
        onClick={onComplete}
        className="btn"
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          zIndex: 1001
        }}
      >
        <span>Skip</span>
        <SkipForward size={18} />
      </button>
    </MotionDiv>
  );
};

export default IntroVideo;
