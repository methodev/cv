//====================================================|
// ITEM


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './item.scss';

// Atoms
import Heading from '../../atoms/heading';
import Text from '../../atoms/text';

// Molecules
import MetaGroup from '../meta-group';


//--------------------------| Component

const Item = ({
  title,
  titleUrl,
  subtitle,
  subtitleUrl,
  details,
  text
}) => {
  const TitleWrapper = titleUrl ? 'a' : 'span';
  const SubtitleWrapper = subtitleUrl ? 'a' : 'span';

  return (
    <div className={styles.root}>
      <Heading size={3} type={'item'}>
        <TitleWrapper
          href={titleUrl}
          target={titleUrl && (titleUrl.indexOf('//') !== -1 ? '_blank' : null)}
        >
          {title}
        </TitleWrapper>
      </Heading>
      <Heading size={4} type={'info'}>
        <SubtitleWrapper
          href={subtitleUrl}
          target={subtitleUrl && (subtitleUrl.indexOf('//') !== -1 ? '_blank' : null)}
        >
          {subtitle}
        </SubtitleWrapper>
      </Heading>
      <MetaGroup items={details} />
      {
        text && (
          <div className={styles.details}>
            <Text>
              {
                text.map((p, i) => (<p key={i}>{p}</p>))
              }
            </Text>
          </div>
        )
      }
    </div>
  );
};


//--------------------------| Export

export default Item;
