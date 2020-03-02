import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const WeatherItem = React.memo(({ id, className, data = {} }) => {
  const { main: { temp_max, temp_min } = {}, weather = [] } = data;
  const max_temp = Math.floor(temp_max);
  const min_temp = Math.floor(temp_min);
  console.log(data);

  return (
    <div id={id} className={cx(styles.className, className)}>
      <div className={styles.time}>{data.dt_txt}</div>
      <div className={styles.temp}>{min_temp}° ~ {max_temp}°</div>
      <div className={styles.description}>
        {weather && weather.length !== 0 && weather[0].description}
      </div>
    </div>
  );
});

export default WeatherItem;
