//====================================================|
// ITEM


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './item.scss';

// HOC
import Tooltip from '../../hoc/tooltip';

// Atoms
import Heading from '../../atoms/heading';
import Text from '../../atoms/text';
import DocBtn from '../../atoms/doc-btn';

// Molecules
import MetaGroup from '../meta-group';


//--------------------------| Component

const Item = ({
  title,
  titleUrl,
  subtitle,
  subtitleUrl,
  file,
  details,
  text,
  tooltip
}) => {
  const TitleWrapper = titleUrl ? 'a' : 'span';
  const SubtitleWrapper = subtitleUrl ? 'a' : 'span';

  return (
    <>
      <div className={classNames(styles.root, { [styles.document]: file })}>
        {
          tooltip && <div className={styles.info}><span data-tip={tooltip} data-for={'item-tooltip'}>i</span></div>
        }
        {
          file && (
            <span className={styles.file}>
              <DocBtn id={file} link={file} />
            </span>
          )
        }
        <Heading size={3} type={'item'}>
          <TitleWrapper
            href={titleUrl}
            target={titleUrl && (titleUrl.indexOf('//') !== -1 ? '_blank' : null)}
          >
            <span>
              {title}
            </span>
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
            <>
              <div className={styles.details}>
                <Text>
                  {
                    text.map((p, i) => (<p key={i}>{p}</p>))
                  }
                </Text>
              </div>
            </>
          )
        }
      </div>
      <Tooltip
        id={'item-tooltip'}
        place={'right'}
        effect={'solid'}
      />
    </>
  );
};


//--------------------------| Export

export default Item;
