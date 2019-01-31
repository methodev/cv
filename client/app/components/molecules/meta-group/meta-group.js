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
      items.map(({
        type,
        value,
        icon,
        tooltip
      }, i) => (
        <Meta
          key={i}
          icon={icon}
          tooltip={tooltip}
          type={type}
        >{value}</Meta>
      ))
    }
  </div>
);


//--------------------------| Export

export default MetaGroup;
