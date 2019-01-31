//====================================================|
// EDUCATION


//--------------------------| Import

// Libraries
import React from 'react';
import moment from 'moment';

// Services
import { formatDate, getLabel } from '../../services/data';

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

  return (
    <Section
      className={styles.root}
      name={data.fields.name}
    >
      {
        items.map((item) => {
          const finalDate = item.fields.endDate ? item.fields.endDate : moment();

          const details = [
            {
              type: 'calendar',
              value: `${formatDate(item.fields.startDate)} — ${item.fields.endDate ? formatDate(item.fields.endDate) : getLabel('ongoing')}`,
              icon: <CalSVG />,
              tooltip: moment(finalDate).to(moment(item.fields.startDate), true)
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
