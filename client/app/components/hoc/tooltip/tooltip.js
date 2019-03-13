//====================================================|
// TOOLTIP


//--------------------------| Import

// Libraries
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { isBrowser } from 'react-device-detect';

// Styles
import styles from './tooltip.scss';


//--------------------------| Component

const Tooltip = props => (
  isBrowser && <ReactTooltip {...props} />
);


//--------------------------| Export

export default Tooltip;
