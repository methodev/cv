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

const Tag = ({ data }) => (
  <>
  <span className={styles.root} data-tip data-for={data.sys.id}>
    {data.fields.name}
  </span>
    {
      (data.fields.description || data.fields.experience) && (
        <Tooltip
          id={data.sys.id}
          place={'top'}
        >
          <p>{data.fields.description}</p>
          { data.fields.experience && (
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


//--------------------------| Export

export default Tag;
