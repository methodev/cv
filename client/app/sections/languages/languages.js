//====================================================|
// LANGUAGES


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getLabel } from '../../services/data';

// Styles
import styles from './languages.scss';

// Molecules
import Progress from '../../components/molecules/progress';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';


//--------------------------| Component

const Languages = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
  >
    {
      data.fields.items.map((item) => {
        const lvl = item.fields.level;
        let lvlLabel;

        switch (true) {
          case (lvl <= 25):
            lvlLabel = getLabel('langPoor');
            break;
          case (lvl > 25 && lvl <= 80):
            lvlLabel = getLabel('langFair');
            break;
          case (lvl > 80 && lvl <= 99):
            lvlLabel = getLabel('langFluent');
            break;
          default:
            lvlLabel = getLabel('langNative');
        }

        return (
          <SectionItem key={item.sys.id}>
            <Progress
              title={item.fields.name}
              level={item.fields.level}
              label={lvlLabel}
            />
          </SectionItem>
        );
      })
    }
  </Section>
);


//--------------------------| Export

export default Languages;
