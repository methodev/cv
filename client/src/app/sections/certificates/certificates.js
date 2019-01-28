//====================================================|
// CERTIFICATES


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { formatDate } from '../../services/content';

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
  const items = data.fields.items.en;

  return (
    <Section
      className={styles.root}
      name={data.fields.name.en}
    >
      {
        items.map(item => (
          <SectionItem key={item.sys.id}>
            <Item
              title={item.fields.title.en}
              titleUrl={item.fields.document.en.fields.file.en.url}
              subtitle={`${item.fields.course.en} by ${item.fields.institution.en.fields.name.en}`}
              subtitleUrl={item.fields.institution.en.fields.homePage.en}
              details={[
                {
                  type: 'calendar',
                  value: formatDate(item.fields.takenDate.en),
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
