import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Login from './Login';
import Forecast from './Forecast';
import { usePromise } from '@hereticaljs/hooks';
import { city } from '../../api';

export default function Task1Page({ id }) {
  const pCities = useMemo(() => city.list(), []);
  const [cities = [],, isPending] = usePromise(pCities);

  return (
    <div id={id} className={styles.className}>
      <div className={styles.login}>
        <Login
          onSubmit={(evt, username, password) => {
            console.log(username, password);
          }}
        />
      </div>
      {isPending
        ? <p>loading...</p>
        : cities.map(city =>
            <section key={city}>
              <h2>{city}</h2>
              <Forecast city={city} />
            </section>
          )
      }
    </div>
  );
}
