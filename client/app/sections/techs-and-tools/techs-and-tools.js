//====================================================|
// TECHNOLOGIES & TOOLS


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getLabel } from '../../services/data';

// Styles
import styles from './techs-and-tools.scss';

// Atoms
import Heading from '../../components/atoms/heading';

// Molecules
import TagGroup from '../../components/molecules/tag-group';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';


//--------------------------| Component

const TechsAndTools = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
  >
    {
      data.fields.items.map((item) => {
        const tags = item.fields.items.map((tag) => {
          const lvl = tag.fields.experience;
          let lvlLabel;

          switch (true) {
            case (lvl <= 50):
              lvlLabel = getLabel('junior');
              break;
            case (lvl > 50 && lvl <= 75):
              lvlLabel = getLabel('midLevel');
              break;
            default:
              lvlLabel = getLabel('senior');
          }

          const newTag = {
            fields: {
              label: lvlLabel,
              ...tag.fields
            },
            sys: tag.sys
          };
          return newTag;
        });

        return (
          <SectionItem key={item.sys.id}>
            <Heading size={3} type={'item'}>{item.fields.title}</Heading>
            <TagGroup tags={tags} />
          </SectionItem>
        );
      })
    }
  </Section>
);


//--------------------------| Export

export default TechsAndTools;
