import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import Forecast from '../Forecast';
import { useCitiesContext, useUserContext } from '../';

const UserPanel = React.memo(({ id, className }) => {
  const store = useCitiesContext();
  const user = useUserContext();

  return (
    <div id={id} className={cx(styles.className, className)}>
      <h1>User Panel</h1>
      <ul>
        <li>username: {user.username}</li>
        <li>my city: {user.city}</li>
      </ul>
      <hr />
      <h2>Cities</h2>
      <ul>
        {store.cities.map(city =>
          <li key={city} onClick={() => user.setCity(city)}>
            <a href={`#${city}`}>{city}</a>
          </li>
        )}
      </ul>
      <hr />
      {user.city &&
        <section>
          <h2>{user.city}</h2>
          <Forecast key={user.city} city={user.city} />
        </section>
      }
    </div>
  );
});

export default UserPanel;
