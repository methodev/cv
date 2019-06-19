//====================================================|
// FOOTER


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getLabel } from '../../../services/data';

// Styles
import styles from './footer.scss';

// Atoms
import DocBtn from '../../atoms/doc-btn';


//--------------------------| Component

const Footer = ({ docs }) => (
  <footer className={styles.root}>
    {(new Date()).getFullYear()}

    <div className={styles.services}>
      {
        docs.map(doc => (
          <DocBtn
            id='pdf'
            key={doc.sys.id}
            tooltip={getLabel('download')}
            link={doc.fields.file.url}
          />
        ))
      }
    </div>
  </footer>
);


//--------------------------| Export

export default Footer;
