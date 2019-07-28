//====================================================|
// TAG


//--------------------------| Import

// Libraries
import React from 'react';

// HOC
import Tooltip from '../../hoc/tooltip';
import ProgressBar from '../progress-bar';

// Styles
import styles from './tag.scss';


//--------------------------| Component

const Tag = ({ data }) => {
  const TagWrapper = data.fields.website ? 'a' : 'span';
  return (
    <>
      <span className={styles.root}>
        <TagWrapper
          href={data.fields.website}
          target={data.fields.website ? '_blank' : null}
          data-tip
          data-for={data.sys.id}
        >
          {data.fields.name}
        </TagWrapper>
      </span>
      {
        (data.fields.description || data.fields.experience) && (
          <Tooltip
            id={data.sys.id}
            place={'top'}
          >
            <p>{data.fields.description}</p>
            {
              data.fields.experience && (
                <div className={'bar'}>
                  <ProgressBar level={data.fields.experience} label={data.fields.label} />
                </div>
              )
            }
          </Tooltip>
        )
      }
    </>
  );
};


//--------------------------| Export

export default Tag;
