import React from 'react';
import styles from './index.module.scss';

export default function Task1Page({ id }) {
  return (
    <div id={id} className={styles.className}>
      the task 1 page
    </div>
  );
}
