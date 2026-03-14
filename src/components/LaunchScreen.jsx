import React from 'react';
import logo from '../assets/Logo.png';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const LaunchScreen = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <motion.img 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        src={logo} 
        alt="INTRA IT Interactive Academy" 
        style={{ maxWidth: '300px', marginBottom: '3rem' }}
      />
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="btn btn-primary"
        style={{ 
          padding: '1rem 3rem', 
          fontSize: '1.25rem', 
          borderRadius: '50px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}
      >
        <Play fill="white" size={24} />
        <span>Start Experience</span>
      </motion.button>
    </motion.div>
  );
};

export default LaunchScreen;
