//====================================================|
// FOOTER


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getAsset, getLabel } from '../../../services/data';

// Styles
import styles from './footer.scss';

// Atoms
import DocBtn from '../../atoms/doc-btn';

// Graphics
import FileSVG from '../../../../assets/graphics/pdf.svg';


//--------------------------| Component

const Footer = () => (
  <footer className={styles.root}>
    {(new Date()).getFullYear()}

    <div className={styles.services}>
      <DocBtn
        id={'pdf'}
        icon={<FileSVG />}
        tooltip={getLabel('download')}
        link={getAsset('cv').fields.file.url}
      />
    </div>
  </footer>
);


//--------------------------| Export

export default Footer;
