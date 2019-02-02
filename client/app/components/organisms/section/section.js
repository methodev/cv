//====================================================|
// SECTION


//--------------------------| Import

// Libraries
import React from 'react';
import ReactTooltip from 'react-tooltip';

// Styles
import styles from './section.scss';

// Atoms
import Heading from '../../atoms/heading';


//--------------------------| Component

const Section = ({ name, tooltip, children }) => (
  <section className={styles.root}>
    <div data-tip={tooltip}>
      <Heading size={2} type={'section'}>{name}</Heading>
    </div>
    <ReactTooltip
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
