import React, { useState } from 'react';
import styles from './index.module.scss';
import constate from 'constate';
import Login from './Login';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';
import { usePromise } from '@hereticaljs/hooks';
import { auth } from '../../api';
import { useCities, useUser } from '../../hooks';

const [CitiesProvider, useCitiesContext] = constate(useCities);
const [UserProvider, useUserContext] = constate(useUser);

export { useCitiesContext, useUserContext };

export default function Task1Page({ id }) {
  const [pUser, setUser] = useState();
  const [user, userError, isUserPending] = usePromise(pUser);

  return (
    <div id={id} className={styles.className}>
      <CitiesProvider>
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
          ? user.username === 'admin'
            ? <AdminPanel />
            : (
              <UserProvider username={user.username}>
                <UserPanel />
              </UserProvider>
            )
          : null
        }
      </CitiesProvider>
    </div>
  );
}
