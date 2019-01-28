//====================================================|
// LANGUAGES


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './languages.scss';

// Molecules
import Progress from '../../components/molecules/progress';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';


//--------------------------| Component

const Languages = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name.en}
  >
    {
      data.fields.items.en.map(item => (
        <SectionItem key={item.sys.id}>
          <Progress
            title={item.fields.name.en}
            level={item.fields.level.en}
          />
        </SectionItem>
      ))
    }
  </Section>
);


//--------------------------| Export

export default Languages;
