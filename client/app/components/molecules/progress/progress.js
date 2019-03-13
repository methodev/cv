//====================================================|
// PROGRESS


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './progress.scss';

// Atoms
import Heading from '../../atoms/heading';
import ProgressBar from '../../atoms/progress-bar';


//--------------------------| Component

const Progress = ({ title, level, label }) => (
  <div className={styles.root}>
    <Heading size={3} type={'item'}>{title}</Heading>
    <div>
      <ProgressBar level={level} label={label} />
    </div>
  </div>
);


//--------------------------| Export

export default Progress;
