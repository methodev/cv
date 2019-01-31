//====================================================|
// SECTION


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './section.scss';

// Atoms
import Heading from '../../atoms/heading';


//--------------------------| Component

const Section = ({ name, tooltip, children }) => (
  <section className={styles.root}>
    <Heading size={2} type={'section'} tooltip={tooltip}>{name}</Heading>
    <div className={styles.content}>
      {children}
    </div>
  </section>
);


//--------------------------| Export

export default Section;
