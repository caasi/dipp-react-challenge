import axios from 'axios';
import { OWM_KEY } from '../consts';

export function forecast5(city) {
  return axios
    .get(
      '//api.openweathermap.org/data/2.5/forecast',
      { params: { appid: OWM_KEY, q: city, units: 'imperial' } },
    )
    .then(({ data }) => data);
}
