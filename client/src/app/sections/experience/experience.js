//====================================================|
// EXPERIENCE


//--------------------------| Import

// Libraries
import React from 'react';
import moment from 'moment';

// Services
import { formatDate, getTotalExperience } from '../../services/content';

// Content
import { ongoing as ongoingLabel } from '../../labels.json';

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
    name={data.fields.name.en}
    tooltip={getTotalExperience(data.fields.items.en)}
  >
    {
      data.fields.items.en.map((item) => {
        const finalDate = item.fields.endDate ? item.fields.endDate.en : moment();
        const duties = item.fields.duties.en.replace(/\n/g, '').split('• ').slice(1);

        const details = [
          {
            type: 'calendar',
            value: `${formatDate(item.fields.startDate.en)} — ${item.fields.endDate ? formatDate(item.fields.endDate.en) : ongoingLabel}`,
            icon: <CalSVG />,
            tooltip: moment(finalDate).to(moment(item.fields.startDate.en), true)
          },
          {
            type: 'location',
            value: item.fields.employer.en.fields.location.en,
            icon: <PinSVG />
          }
        ];

        return (
          <SectionItem key={item.sys.id}>
            <Item
              title={item.fields.name.en}
              subtitle={item.fields.employer.en.fields.name.en}
              subtitleUrl={item.fields.employer.en.fields.homepage.en}
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
