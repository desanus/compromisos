import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={scrollToTop} style={buttonStyle}>
      <FontAwesomeIcon icon={faArrowUp} style={iconStyle} />
    </button>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: '9999',
  backgroundColor: '#32b6e9',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconStyle = {
  color: '#fff',
};

export default ScrollToTopButton;
