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

const Progress = ({ title, level }) => (
  <div className={styles.root}>
    <Heading size={3} type={'item'}>{title}</Heading>
    <ProgressBar level={level} />
  </div>
);


//--------------------------| Export

export default Progress;
