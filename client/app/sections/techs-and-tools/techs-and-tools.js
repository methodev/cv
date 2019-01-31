//====================================================|
// TECHNOLOGIES & TOOLS


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './techs-and-tools.scss';

// Atoms
import Heading from '../../components/atoms/heading';

// Molecules
import TagGroup from '../../components/molecules/tag-group';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';


//--------------------------| Component

const TechsAndTools = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
  >
    {
      data.fields.items.map(item => (
        <SectionItem key={item.sys.id}>
          <Heading size={3} type={'item'}>{item.fields.title}</Heading>
          <TagGroup tags={item.fields.items} />
        </SectionItem>
      ))
    }
  </Section>
);


//--------------------------| Export

export default TechsAndTools;
