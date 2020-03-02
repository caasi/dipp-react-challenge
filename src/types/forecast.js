export function filterByDate(forecast) {
  const { list = [] } = forecast;

  let cnt = 0;
  let group = {};
  let newList = [];
  for (let weather of list) {
    const [date] = weather.dt_txt.split(' ');
    if (!group[date] && cnt < 5) {
      group[date] = true;
      newList.push(weather);
      cnt += 1;
    }
  }

  return {
    ...forecast,
    cnt: newList.length,
    list: newList,
  };
}

export function filterToDate(forecast, timeStr) {
  const { list = [] } = forecast;
  const [date] = timeStr.split(' ');

  let newList = [];
  for (let weather of list) {
    const [_date] = weather.dt_txt.split(' ');
    if (_date === date) {
      newList.push(weather);
    }
  }

  return {
    ...forecast,
    cnt: newList.length,
    list: newList,
  };
}
