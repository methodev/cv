//====================================================|
// TAG GROUP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './tag-group.scss';

// Atoms
import Tag from '../../atoms/tag';


//--------------------------| Component

const TagGroup = ({ tags }) => (
  <div className={styles.root}>
    {
      tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))
    }
  </div>
);


//--------------------------| Export

export default TagGroup;
