import React, { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import { useCitiesContext } from '../';
import Forecast from '../Forecast';

const AdminPanel = React.memo(({ id, className }) => {
  const store = useCitiesContext();
  const [newCity, setNewCity] = useState('');

  return (
    <div id={id} className={cx(styles.className, className)}>
      <h1>Admin Panel</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          store.create(newCity);
          setNewCity('');
        }}
      >
        <input
          value={newCity}
          onChange={(evt) => setNewCity(evt.target.value)}
        />
        <button type="submit">add city</button>
      </form>
      <hr />
      {store.cities.map((city) =>
        <section key={city}>
          <h2>{city}</h2>
          <button onClick={() => store.remove(city)}>
            remove
          </button>
          <Forecast city={city} />
        </section>
      )}
    </div>
  );
});

export default AdminPanel;
