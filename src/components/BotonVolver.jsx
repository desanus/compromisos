import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const BotonVolver = () => {


  return (
    <Link  to={`/`} style={buttonStyle}>
      <FontAwesomeIcon icon={faArrowLeft} style={iconStyle} />
    </Link>
  );
};

const buttonStyle = {
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

export default BotonVolver;
