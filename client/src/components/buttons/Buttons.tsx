import React from "react";
import styles from './buttons.module.css'

interface buttonProps {
    title: string;
    url: string;
  }
   
  const Buttons: React.FC<buttonProps> = ({ title, url }) => {
    return (
        <button className={`${styles.button} z-20`}>{title}</button>
    );
  };

export default Buttons;