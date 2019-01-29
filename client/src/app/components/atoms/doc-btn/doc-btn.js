//====================================================|
// DOCUMENT BUTTON


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './doc-btn.scss';


//--------------------------| Component

const DocBtn = ({
  icon,
  handler,
  link,
  tooltip
}) => {
  const Icon = () => icon;

  return (
    <a
      className={styles.root}
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
