import { useState, useCallback, useEffect } from 'react';
import { auth } from '../api';

export default function useUser({ username }) {
  const [user, setUser] = useState();

  const setCity = useCallback((city) => {
    auth.update(username, { ...user, city })
      .then(user => setUser(user));
  }, [username, user]);

  useEffect(() => {
    if (!username) return;
    auth.get(username)
      .then(user => setUser(user));
  }, [username]);

  return {
    ...user,
    setCity,
  }
}
