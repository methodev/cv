//====================================================|
// TAG


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './tag.scss';


//--------------------------| Component

const Tag = ({ children }) => (
  <span className={styles.root}>
    {children}
  </span>
);


//--------------------------| Export

export default Tag;
