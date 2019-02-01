//====================================================|
// EXPERIENCE


//--------------------------| Import

// Libraries
import React from 'react';
import moment from 'moment';

// Services
import { formatDate, getTotalExperience, getLabel } from '../../services/data';

// Styles
import styles from './experience.scss';

// Molecules
import Item from '../../components/molecules/item';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';

// Graphics
import CalSVG from '../../../assets/graphics/calendar.svg';
import PinSVG from '../../../assets/graphics/pin.svg';


//--------------------------| Component

const Experience = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
    tooltip={getTotalExperience(data.fields.items)}
  >
    {
      data.fields.items.map((item) => {
        const finalDate = item.fields.endDate ? item.fields.endDate : moment();
        const duties = item.fields.duties.replace(/\n/g, '').split('• ').slice(1);

        const details = [
          {
            type: 'calendar',
            value: `${formatDate(item.fields.startDate)} — ${item.fields.endDate ? formatDate(item.fields.endDate) : getLabel('ongoing')}`,
            icon: <CalSVG />,
            tooltip: moment(finalDate).to(moment(item.fields.startDate), true)
          },
          {
            type: 'location',
            value: item.fields.employer.fields.location,
            icon: <PinSVG />
          }
        ];

        return (
          <SectionItem key={item.sys.id}>
            <Item
              title={item.fields.name}
              subtitle={item.fields.employer.fields.name}
              subtitleUrl={item.fields.employer.fields.homePage}
              details={details}
              text={duties}
            />
          </SectionItem>
        );
      })
    }
  </Section>
);

//--------------------------| Export

export default Experience;
