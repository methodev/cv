//====================================================|
// SECTION ITEM


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './section.scss';


//--------------------------| Component

const SectionItem = ({ children }) => (
  <div className={styles.item}>
    {children}
  </div>
);


//--------------------------| Export

export default SectionItem;
