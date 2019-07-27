//====================================================|
// HEADING


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './heading.scss';


//--------------------------| Component

const Heading = ({
  size,
  type = 'title',
  children
}) => {
  const H = size ? `h${size}` : 'label';
  const classes = classNames(styles.root, styles[type]);

  return (
    <H className={classes}>
      {children}
    </H>
  );
};


//--------------------------| Export

export default Heading;
