//====================================================|
// CONTACT


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './contact.scss';


//--------------------------| Component

const Contact = ({
  id,
  icon,
  value,
  printValue,
  link
}) => {
  const Icon = ({ className }) => <i className={className}>{icon}</i>;
  const Wrapper = link ? 'a' : 'span';

  return (
    <span className={classNames(styles.root, styles[id])}>
      <Wrapper
        href={link}
        target={link && (link.indexOf('//') !== -1 ? '_blank' : null)}
      >
        <Icon className={styles.icon} />
        {printValue && <span className={styles.printValue}>{printValue}</span>}
        <span className={styles.value}>{value}</span>
      </Wrapper>
    </span>
  );
};


//--------------------------| Export

export default Contact;
