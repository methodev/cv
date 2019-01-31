//====================================================|
// HIGHLIGHT


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './highlight.scss';

// Atoms
import Heading from '../../atoms/heading';


//--------------------------| Component

const Highlight = ({ title, children }) => (
  <div className={styles.root}>
    {children}
    <Heading size={3} type={'item'}>{title}</Heading>
  </div>
);


//--------------------------| Export

export default Highlight;
