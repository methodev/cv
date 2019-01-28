//====================================================|
// STRENGTHS


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './strengths.scss';

// Molecules
import TagGroup from '../../components/molecules/tag-group';

// Organisms
import Section from '../../components/organisms/section';


//--------------------------| Component

const Strengths = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name.en}
  >
    <TagGroup tags={data.fields.items.en.map(item => item.fields.name.en)} />
  </Section>
);


//--------------------------| Export

export default Strengths;
