//====================================================|
// DOCUMENT BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './doc-btn.scss';


//--------------------------| Component

const DocBtn = ({
  id,
  icon,
  handler,
  link,
  tooltip
}) => {
  const Icon = () => icon;

  return (
    <a
      className={classNames(styles.root, styles[id])}
      onClick={handler}
      title={tooltip}
      href={link}
      target={link ? '_blank' : null}
    >
      <Icon />
    </a>
  );
};


//--------------------------| Export

export default DocBtn;
