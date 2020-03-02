import { useState, useCallback, useEffect } from 'react';
import { city } from '../api';

export default function useCities() {
  const [cities, setCities] = useState([]);

  const create = useCallback((cityName) => {
    city.create(cityName).then(result => setCities(result));
  }, []);

  const remove = useCallback((cityName) => {
    city.remove(cityName).then(result => setCities(result));
  }, []);

  useEffect(() => {
    city.list().then(result => setCities(result));
  }, []);

  return {
    cities,
    create,
    remove,
  };
}
