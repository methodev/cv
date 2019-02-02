//====================================================|
// META


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

// Styles
import styles from './meta.scss';


//--------------------------| Component

const Meta = ({
  type,
  icon,
  tooltip,
  children
}) => {
  const Icon = ({ className }) => <i className={className}>{icon}</i>;

  return (
    <>
      <span className={classNames(styles.root, { [type]: type })} data-tip={tooltip} data-for='period'>
        {
          icon && <Icon className={styles.icon} />
        }
        {children}
      </span>
      <ReactTooltip
        id={'period'}
        place={'right'}
        effect={'solid'}
      />
    </>
  );
};


//--------------------------| Export

export default Meta;
