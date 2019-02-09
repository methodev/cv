//====================================================|
// SECTION


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './section.scss';

// HOC
import Tooltip from '../../hoc/tooltip';

// Atoms
import Heading from '../../atoms/heading';


//--------------------------| Component

const Section = ({ name, tooltip, children }) => (
  <section className={styles.root}>
    <div data-tip={tooltip}>
      <Heading size={2} type={'section'}>{name}</Heading>
    </div>
    <Tooltip
      place={'top'}
      effect={'solid'}
    />

    <div className={styles.content}>
      {children}
    </div>
  </section>
);


//--------------------------| Export

export default Section;
