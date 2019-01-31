//====================================================|
// PROGRESS BAR


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './progress-bar.scss';


//--------------------------| Component

const ProgressBar = ({ level }) => (
  <div className={styles.root}>
    <span style={{ width: `${level}%` }} />
  </div>
);


//--------------------------| Export

export default ProgressBar;
