import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './ImageSlider.css';

const ImageSlider = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const trackRef = useRef(null);

  const handleOnDown = e => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);  
    setPrevPercentage(trackRef.current.dataset.percentage);
  };

  const handleOnMove = e => {
    if (mouseDownAt === 0) return;
  
    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
  
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
    trackRef.current.style.setProperty('--nextPercentage', `${nextPercentage}%`);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', e => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', e => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', e => handleOnDown(e.touches[0]));
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', e => handleOnUp(e.touches[0]));
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', e => handleOnMove(e.touches[0]));
    };
  }, [handleOnDown, handleOnUp, handleOnMove]);

  return (
    <motion.div 
      id="image-track"
      ref={trackRef}
      data-mouse-down-at={mouseDownAt}
      data-prev-percentage={prevPercentage}
      initial={{ x: -550 }} 
      animate={{ x: 0 }} 
      transition={{ type: 'spring', stiffness: 120, damping: 15 }} 
    >
      <img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
      <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      </motion.div>
  );
};

export default ImageSlider;