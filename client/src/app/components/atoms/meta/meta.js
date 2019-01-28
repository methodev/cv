//====================================================|
// META


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

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
    <span className={classNames(styles.root, { [type]: type })} title={tooltip}>
      {
        icon && <Icon className={styles.icon} />
      }
      {children}
    </span>
  );
};


//--------------------------| Export

export default Meta;
