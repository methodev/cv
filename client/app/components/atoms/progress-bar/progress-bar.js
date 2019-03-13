//====================================================|
// PROGRESS BAR


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './progress-bar.scss';


//--------------------------| Component

const ProgressBar = ({ level, label }) => (
  <div className={styles.root}>
    <div>
      <span style={{ width: `${level}%` }}>
        {label}
      </span>
    </div>
  </div>
);


//--------------------------| Export

export default ProgressBar;
