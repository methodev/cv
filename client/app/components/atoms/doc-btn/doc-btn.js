//====================================================|
// DOCUMENT BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

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
    <>
      <a
        className={classNames(styles.root, styles[id])}
        onClick={handler}
        data-tip={tooltip}
        data-for={'pdf'}
        href={link}
        target={link ? '_blank' : null}
      >
        <Icon />
      </a>
      <ReactTooltip
        id={'pdf'}
        place={'left'}
      />
    </>
  );
};


//--------------------------| Export

export default DocBtn;
