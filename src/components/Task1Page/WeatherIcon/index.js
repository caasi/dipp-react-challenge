import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const ICON_BASE = 'http://openweathermap.org/img/w/';

const WeatherIcon = React.memo(({
  id,
  className,
  icon = '',
  main = '',
  description = '',
}) => {
  return (
    <div className={cx(styles.className, className)}>
      <img src={`${ICON_BASE}${icon}.png`} alt={`${main} - ${description}`} />
    </div>
  );
});

export default WeatherIcon;
