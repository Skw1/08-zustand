'use client';
import React from 'react';

import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return <p className={styles.text}>Loading, please wait...</p>;
};

export default Loader;
