//====================================================|
// EDUCATION


//--------------------------| Import

// Libraries
import React from 'react';
import moment from 'moment';

// Services
import {
  filterItemsTillNow,
  formatPeriod,
  formatDuration
} from '../../services/data';

// Styles
import styles from './education.scss';

// Molecules
import Item from '../../components/molecules/item';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';

// Graphics
import CalSVG from '../../../assets/graphics/calendar.svg';
import PinSVG from '../../../assets/graphics/pin.svg';


//--------------------------| Component

const Education = ({ data }) => {
  const { items } = data.fields;
  const itemsTillNow = filterItemsTillNow(items);

  return (
    <Section
      className={styles.root}
      name={data.fields.name}
    >
      {
        itemsTillNow.map((item) => {
          const finalDate = item.fields.endDate ? item.fields.endDate : moment();

          const details = [
            {
              type: 'calendar',
              value: formatPeriod(item.fields.startDate, item.fields.endDate),
              icon: <CalSVG />,
              tooltip: formatDuration(item.fields.startDate, finalDate)
            },
            {
              type: 'location',
              value: item.fields.institution.fields.location,
              icon: <PinSVG />
            }
          ];

          return (
            <SectionItem key={item.sys.id}>
              <Item
                title={item.fields.title}
                file={item.fields.document && item.fields.document.fields.file.url}
                subtitle={item.fields.institution.fields.name}
                subtitleUrl={item.fields.institution.fields.homePage}
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

export default Education;
