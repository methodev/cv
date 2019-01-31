//====================================================|
// CERTIFICATES


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { formatDate, getLabel } from '../../services/data';

// Styles
import styles from './certificates.scss';

// Molecules
import Item from '../../components/molecules/item';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';

// Graphics
import CalSVG from '../../../assets/graphics/calendar.svg';


//--------------------------| Component

const Certificates = ({ data }) => {
  const { items } = data.fields;

  return (
    <Section
      className={styles.root}
      name={data.fields.name}
    >
      {
        items.map(item => (
          <SectionItem key={item.sys.id}>
            <Item
              title={item.fields.title}
              titleUrl={item.fields.document.fields.file.url}
              subtitle={`${item.fields.course} ${getLabel('by')} ${item.fields.institution.fields.name}`}
              subtitleUrl={item.fields.institution.fields.homePage}
              details={[
                {
                  type: 'calendar',
                  value: formatDate(item.fields.takenDate),
                  icon: <CalSVG />
                }
              ]}
            />
          </SectionItem>
        ))
      }
    </Section>
  );
};


//--------------------------| Export

export default Certificates;
