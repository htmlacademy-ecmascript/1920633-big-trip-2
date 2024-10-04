const DATE_FORMATS = {
  fullDateTime: 'YYYY-MM-DDTHH:mm',
  shortDateTime: 'DD/MM/YY HH:mm',
  fullDate: 'YYYY-MM-DD',
  shortDate: 'MMM D',
  eventDate: 'D MMM',
  eventTime: 'HH:mm',
};

const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DESTINATIONS = ['Amsterdam', 'Geneva', 'Chamonix', 'Vienna', 'Stockholm', 'Rome'];

const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

export {DATE_FORMATS, POINT_TYPES, DESTINATIONS, DESCRIPTIONS};
