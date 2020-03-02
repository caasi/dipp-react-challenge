import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import moment from 'moment';
import WeatherIcon from '../WeatherIcon';

const Weather = React.memo(({
  id,
  className,
  active,
  data,
  onClick,
}) => {
  const { dt_txt, main: { temp_min, temp_max } = {}, weather = [] } = data;
  const day = moment(dt_txt).format('ddd');
  const max_temp = Math.floor(temp_max);
  const min_temp = Math.floor(temp_min);

  return (
    <div
      className={cx(styles.className, className, { active })}
      onClick={onClick}
    >
      <span className={styles.day}>{day}</span>
      {weather.map(w =>
        <WeatherIcon key={w.id} className={styles.icon} {...w} />
      )}
      <div className={styles.temp}>
        <span className={styles.max}>{max_temp}°</span>
        <span className={styles.min}>{min_temp}°</span>
      </div>
    </div>
  );
});

export default Weather;
