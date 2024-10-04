import dayjs from 'dayjs';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const humanizeEventDate = (eventDate, format) =>
  eventDate ? dayjs(eventDate).format(format) : '';

const getTimeDifference = (dateFrom, dateTo) => {
  const date1 = dayjs(dateFrom);
  const date2 = dayjs(dateTo);

  return dayjs(date2.diff(date1)).format('HH[H] mm[M]');
};

export {getRandomInteger, getRandomArrayElement, humanizeEventDate, getTimeDifference};
