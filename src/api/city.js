import store from 'store';
import { delay } from '../types/time';

const cities = [
  'Mexico',
  'Shanghai',
  'Tokyo',
  'London',
  'New York',
];

const currentCities = store.get('cities');
if (!currentCities) {
  store.set('cities', cities);
}

export function list() {
  return Promise
    .resolve(store.get('cities'))
    .then(delay(1000));
}

export function create(city) {
  const cities = [
    city,
    ...store.get('cities'),
  ];

  store.set('cities', cities);

  return Promise
    .resolve(cities)
    .then(delay(1000));
}

export function remove(city) {
  let cities = store.get('cities');
  const i = cities.findIndex((c) => c === city);

  if (i !== -1) {
    cities = [
      ...cities.slice(0, i),
      ...cities.slice(i + 1),
    ];
    store.set('cities', cities);
  }

  return Promise
    .resolve(cities)
    .then(delay(1000));
}
