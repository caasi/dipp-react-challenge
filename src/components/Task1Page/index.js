import React, { useState, useMemo } from 'react';
import styles from './index.module.scss';
import Login from './Login';
import Forecast from './Forecast';
import { usePromise } from '@hereticaljs/hooks';
import { auth, city } from '../../api';

export default function Task1Page({ id }) {
  const [pUser, setUser] = useState();
  const [user, userError, isUserPending] = usePromise(pUser);
  const pCities = useMemo(() => city.list(), []);
  const [cities = [],, isPending] = usePromise(pCities);

  return (
    <div id={id} className={styles.className}>
      {!user &&
        <div className={styles.login}>
          <Login
            disabled={isUserPending}
            message={userError && userError.message}
            onSubmit={(evt, username, password) => {
              setUser(auth.login(username, password));
            }}
          />
        </div>
      }
      {user
        ? isPending
          ? <p>loading...</p>
          : cities.map(city =>
              <section key={city}>
                <h2>{city}</h2>
                <Forecast city={city} />
              </section>
            )
        : null
      }
    </div>
  );
}
