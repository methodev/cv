//====================================================|
// FOOTER


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getAsset } from '../../../services/content';

// Content
import {
  print as printTooltip,
  download as downloadTooltip
} from '../../../labels.json';

// Styles
import styles from './footer.scss';

// Atoms
import DocBtn from '../../atoms/doc-btn';

// Graphics
import FileSVG from '../../../../assets/graphics/pdf.svg';
import PrintSVG from '../../../../assets/graphics/print.svg';


//--------------------------| Component

const Footer = () => (
  <footer className={styles.root}>
    {(new Date()).getFullYear()}

    <div className={styles.services}>
      <DocBtn
        icon={<FileSVG />}
        tooltip={downloadTooltip}
        link={getAsset('6Z2VCzTPeo4SA0gcUSCKWm').fields.file.en.url}
      />
      {
        navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (
          <DocBtn
            icon={<PrintSVG />}
            tooltip={printTooltip}
            handler={() => {
              window.print();
            }}
          />
        )
      }
    </div>
  </footer>
);


//--------------------------| Export

export default Footer;
