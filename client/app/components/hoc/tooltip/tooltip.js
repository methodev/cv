//====================================================|
// TOOLTIP


//--------------------------| Import

// Libraries
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { isBrowser } from 'react-device-detect';


//--------------------------| Component

const Tooltip = props => (
  isBrowser && <ReactTooltip {...props} />
);


//--------------------------| Export

export default Tooltip;
