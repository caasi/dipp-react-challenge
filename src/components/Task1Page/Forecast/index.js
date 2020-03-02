import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import Weather from '../Weather';
import WeatherItem from '../WeatherItem';
import { usePromise, useOptional } from '@hereticaljs/hooks';
import * as F from '../../../types/forecast';
import { weather } from '../../../api';

const Forecast = React.memo(({ city }) => {
  const [date, setDate] = useState();
  const [forecast = { list: [] },, isPending] =
    usePromise(useMemo(() => weather.forecast5(city), [city]));
  const dailyForecast = useMemo(
    () => F.filterByDate(forecast),
    [forecast],
  );
  const hourlyForecast = useOptional(
    [date],
    (date) => F.filterToDate(forecast, date),
  );

  return (
    <div className={styles.className}>
      {isPending
        ? <span>loading...</span>
        : (
          <ol className={styles.daily}>
            {dailyForecast.list.map(data =>
              <li key={data.dt_txt}>
                <Weather
                  active={data.dt_txt === date}
                  data={data}
                  onClick={() => setDate(data.dt_txt)}
                />
              </li>
            )}
          </ol>
        )
      }
      {hourlyForecast &&
        <ol className={styles.hourly}>
          {hourlyForecast.list.map(data =>
            <li key={data.dt_txt}>
              <WeatherItem className={styles.item} data={data} />
            </li>
          )}
        </ol>
      }
    </div>
  );
});

export default Forecast;
