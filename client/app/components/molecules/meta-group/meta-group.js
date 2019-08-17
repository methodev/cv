//====================================================|
// META GROUP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './meta-group.scss';

// Atoms
import Meta from '../../atoms/meta';


//--------------------------| Component

const MetaGroup = ({ items }) => (
  <div className={styles.root}>
    {
      items.map((item, i) => (
        <Meta
          key={i}
          {...item}
        >{item.value}</Meta>
      ))
    }
  </div>
);


//--------------------------| Export

export default MetaGroup;
