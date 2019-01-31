//====================================================|
// MOST PROUD OF


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './most-proud-of.scss';

// Molecules
import Highlight from '../../components/molecules/highlight';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';

// Graphics
import TargetSVG from '../../../assets/graphics/target.svg';
import ExpandSVG from '../../../assets/graphics/expand.svg';


//--------------------------| Types

const types = {
  pedantry: <TargetSVG />,
  layouts: <ExpandSVG />
};


//--------------------------| Component

const MostProudOf = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
  >
    {
      data.fields.items.map((item) => {
        const Icon = ({ className }) => <i className={className}>{types[item.fields.id]}</i>;

        return (
          <SectionItem key={item.sys.id}>
            <Highlight title={item.fields.title}>
              <Icon />
            </Highlight>
          </SectionItem>
        );
      })
    }
  </Section>
);


//--------------------------| Export

export default MostProudOf;
