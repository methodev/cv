//====================================================|
// META


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// HOC
import Tooltip from '../../hoc/tooltip';

// Styles
import styles from './meta.scss';


//--------------------------| Component

const Meta = ({
  type,
  icon,
  tooltip,
  addon,
  children
}) => {
  const Icon = ({ className }) => <i className={className}>{icon}</i>;

  return (
    <>
      <span className={classNames(styles.root, { [type]: type })} data-tip={tooltip} data-for='period'>
        {
          icon && <Icon className={styles.icon} />
        }
        {
          children
        }
        {
          addon && addon === 'finished' && <i className={styles.addon}>({tooltip})</i>
        }
      </span>
      <Tooltip
        id={'period'}
        place={'right'}
        effect={'solid'}
      />
    </>
  );
};


//--------------------------| Export

export default Meta;
