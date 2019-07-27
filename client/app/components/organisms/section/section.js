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
    <div>
      <Heading size={2} type={'section'}>
        <span data-tip={tooltip} data-for={'section-tooltip'}>
          {
            name
          }
          {
            tooltip && <i>({tooltip})</i>
          }
        </span>
      </Heading>
    </div>
    <Tooltip
      id={'section-tooltip'}
      place={'right'}
      effect={'solid'}
    />

    <div className={styles.content}>
      {children}
    </div>
  </section>
);


//--------------------------| Export

export default Section;
