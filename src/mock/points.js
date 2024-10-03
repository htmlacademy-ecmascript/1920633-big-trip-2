import {DESTINATIONS} from '../const';
import {getRandomArrayElement} from '../util';

const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a280kl',
    basePrice: 400,
    dateFrom: '2019-07-01T06:55:56.845Z',
    dateTo: '2019-07-01T16:00:13.375Z',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: false,
    offers: [
      'a4c3e4e6-9053-42ce-b747-e281314baa31',
      'c4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'taxi'
  },
  {
    id: 'b4b62000-293f-4c3d-a702-94eec4a2808c',
    basePrice: 300,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: true,
    offers: [
      'f4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'bus'
  },
  {
    id: 'f4b62099-293f-4c3d-b702-94jkc4a2808c',
    basePrice: 700,
    dateFrom: '2019-08-05T09:15:00',
    dateTo: '2019-08-05T20:22:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: true,
    offers: [
      'g4c3e4e6-9053-42ce-b747-e281314baa31',
    ],
    type: 'train'
  },
  {
    id: 'j7i62099-293f-4c3d-b702-94eec4a2808c',
    basePrice: 900,
    dateFrom: '2019-08-09T19:00:00',
    dateTo: '2019-08-10T15:30:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: false,
    offers: [
      'm4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'ship'
  },
  {
    id: 'k7i62099-293f-4c3d-b702-94eec4a2808c',
    basePrice: 350,
    dateFrom: '2019-08-18T17:00:00',
    dateTo: '2019-08-19T12:30:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: false,
    offers: [
      'n4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'drive'
  },
  {
    id: 'k8i62099-293f-4c3d-b702-94eec4a8008c',
    basePrice: 1500,
    dateFrom: '2019-08-20T13:00:00',
    dateTo: '2019-08-20T23:56:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: true,
    offers: [
      'p4c3e4e6-9053-42ce-b747-e281314baa31',
      'r4c3e4e6-9053-42ce-b747-e281314baa31',
      's4c3e4e6-9053-42ce-b747-e281314baa31',
    ],
    type: 'flight'
  },
  {
    id: 'sbi62099-293f-4c3d-b702-94eec4a2808c',
    basePrice: 200,
    dateFrom: '2019-08-27T17:00:00',
    dateTo: '2019-08-27T19:20:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: false,
    offers: [
      'u4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'check-in'
  },
  {
    id: 'yji62099-293f-4c3d-b702-94eec4a2808c',
    basePrice: 50,
    dateFrom: '2019-09-01T09:00:00',
    dateTo: '2019-09-01T21:00:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'hki62099-293f-4c3d-b702-94eec4a2808c',
    basePrice: 650,
    dateFrom: '2019-09-05T20:00:00',
    dateTo: '2019-09-05T22:00:00',
    destination: getRandomArrayElement(DESTINATIONS),
    isFavorite: false,
    offers: [
      'x4c3e4e6-9053-42ce-b747-e281314baa31',
      'y4c3e4e6-9053-42ce-b747-e281314baa31',
      'z4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'restaurant'
  }
];

const getRandomPoint = () =>
  getRandomArrayElement(mockPoints);

export {getRandomPoint};
