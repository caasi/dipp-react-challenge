import React from 'react';
import styles from './index.module.scss';

const ICON_BASE = 'http://openweathermap.org/img/w/';

const WeatherIcon = React.memo(({ icon = '', main = '', description = '' }) => {
  return (
    <div className={styles.className}>
      <img src={`${ICON_BASE}${icon}.png`} alt={`${main} - ${description}`} />
    </div>
  );
});

export default WeatherIcon;
