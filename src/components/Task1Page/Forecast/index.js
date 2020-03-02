import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import Weather from '../Weather';
import { usePromise } from '@hereticaljs/hooks';
import { weather } from '../../../api';

const Forecast = React.memo(({ city }) => {
  const [date, setDate] = useState();
  const [forecast = { list: [] },, isPending] =
    usePromise(useMemo(() => weather.forecast5(city), [city]));

  return isPending
    ? <span>loading...</span>
    : (
      <ol className={styles.className}>
        {forecast.list.map(data =>
          <li key={data.dt_txt}>
            <Weather
              active={data.dt_txt === date}
              data={data}
              onClick={() => setDate(data.dt_txt)}
            />
          </li>
        )}
      </ol>
    );
});

export default Forecast;
