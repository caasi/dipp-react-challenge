import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { usePromise } from '@hereticaljs/hooks';
import { city, weather } from '../../api';

const Weather = React.memo(({ data }) => {
  const { dt_txt, main: { temp_min, temp_max } = {} } = data;

  return (
    <span>{dt_txt}: {temp_min}~{temp_max}</span>
  );
});

const FiveDays = React.memo(({ city }) => {
  const [forecast = { list: [] },, isPending] =
    usePromise(useMemo(() => weather.forecast5(city), [city]));

  return isPending
    ? <span>loading...</span>
    : (
      <ol>
        {forecast.list.map(data =>
          <li key={data.dt_txt}><Weather data={data} /></li>
        )}
      </ol>
    );
});

export default function Task1Page({ id }) {
  const [currentCity, setCurrentCity] = useState();
  const pCities = useMemo(() => city.list(), []);
  const [cities = [],, isPending] = usePromise(pCities);

  return (
    <div id={id} className={styles.className}>
      {isPending
        ? <span>loading...</span>
        : <ul>
            {cities.map(city =>
              <li key={city}>
                <button
                  onClick={() => {
                    if (currentCity === city) return setCurrentCity();
                    setCurrentCity(city);
                  }}
                >
                  {city}
                </button>
                <FiveDays city={city} />
              </li>
            )}
          </ul>
      }
      <p>current city: {currentCity}</p>
    </div>
  );
}
