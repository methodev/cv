//====================================================|
// DOCUMENT BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Services
import { getLabel } from '../../../services/data';

// HOC
import Tooltip from '../../hoc/tooltip';

// Styles
import styles from './doc-btn.scss';

// Graphics
import FileSVG from '../../../../assets/graphics/pdf.svg';


//--------------------------| Component

const DocBtn = ({
  type = 'pdf',
  id,
  handler,
  link,
  tooltip = getLabel('openPDF'),
  icon = <FileSVG />
}) => {
  const Icon = () => icon;

  return (
    <>
      <a
        className={classNames(styles.root, styles[type])}
        onClick={handler}
        data-tip={tooltip}
        data-for={id}
        href={link}
        target={link ? '_blank' : null}
      >
        <Icon />
      </a>
      <Tooltip
        id={id}
        place={'left'}
        effect={'solid'}
      />
    </>
  );
};


//--------------------------| Export

export default DocBtn;
