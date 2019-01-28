//====================================================|
// CONTACT GROUP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './contact-group.scss';

// Atoms
import Contact from '../../atoms/contact';


//--------------------------| Component

const ContactGroup = ({ contacts }) => (
  <div className={styles.root}>
    {
      Object.keys(contacts).map((contact, i) => (
        <Contact key={i} {...contacts[contact]} />
      ))
    }
  </div>
);


//--------------------------| Export

export default ContactGroup;
