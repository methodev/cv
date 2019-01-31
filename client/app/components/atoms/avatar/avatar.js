//====================================================|
// AVATAR


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './avatar.scss';


//--------------------------| Component

const Avatar = ({ url }) => (
  <picture className={styles.root}>
    <img src={url} />
  </picture>
);


//--------------------------| Export

export default Avatar;
