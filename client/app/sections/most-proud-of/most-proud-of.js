//====================================================|
// MOST PROUD OF


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './most-proud-of.scss';

// Molecules
import Heading from '../../components/atoms/heading';

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
            <Heading size={3} type={'item'}>{item.fields.title}</Heading>
            {
              item.fields.description && (
                <p className={styles.description}>{item.fields.description}</p>
              )
            }
          </SectionItem>
        );
      })
    }
  </Section>
);


//--------------------------| Export

export default MostProudOf;
