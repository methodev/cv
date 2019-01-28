//====================================================|
// REFERENCES


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './references.scss';

// Molecules
import Item from '../../components/molecules/item';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';

// Graphics
import PhoneSVG from '../../../assets/graphics/phone.svg';
import PinSVG from '../../../assets/graphics/pin.svg';


//--------------------------| Component

const References = ({ data }) => {
  const items = data.fields.items.en;

  return (
    <Section
      className={styles.root}
      name={data.fields.name.en}
    >
      {
        items.map((item) => {
          const details = [
            {
              type: 'phone',
              value: item.fields.phone.en,
              icon: <PhoneSVG />
            },
            {
              type: 'location',
              value: item.fields.location.en,
              icon: <PinSVG />
            }
          ];

          return (
            <SectionItem key={item.sys.id}>
              <Item
                title={item.fields.name.en}
                titleUrl={item.fields.link.en}
                subtitle={item.fields.relation.en}
                details={details}
              />
            </SectionItem>
          );
        })
      }
    </Section>
  );
};


//--------------------------| Export

export default References;
