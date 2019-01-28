//====================================================|
// EDUCATION


//--------------------------| Import

// Libraries
import React from 'react';
import moment from 'moment';

// Services
import { formatDate } from '../../services/content';

// Content
import { ongoing as ongoingLabel } from '../../labels.json';

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
  const items = data.fields.items.en;

  return (
    <Section
      className={styles.root}
      name={data.fields.name.en}
    >
      {
        items.map((item) => {
          const finalDate = item.fields.endDate ? item.fields.endDate.en : moment();

          const details = [
            {
              type: 'calendar',
              value: `${formatDate(item.fields.startDate.en)} — ${item.fields.endDate ? formatDate(item.fields.endDate.en) : ongoingLabel}`,
              icon: <CalSVG />,
              tooltip: moment(finalDate).to(moment(item.fields.startDate.en), true)
            },
            {
              type: 'location',
              value: item.fields.institution.en.fields.location.en,
              icon: <PinSVG />
            }
          ];

          return (
            <SectionItem key={item.sys.id}>
              <Item
                title={item.fields.title.en}
                subtitle={item.fields.institution.en.fields.name.en}
                subtitleUrl={item.fields.institution.en.fields.homePage.en}
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
