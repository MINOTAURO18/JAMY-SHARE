import React from 'react';
import jamy from '../assets/jamy.svg';

interface JamyIconProps {
  size: number; 
}

const JamyIcon: React.FC<JamyIconProps> = ({ size }) => {
  return <img src={jamy} alt="Jamy" width={size} height={size} />;
};

export default JamyIcon;
