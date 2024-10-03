import {DESCRIPTIONS} from '../const';
import {getRandomArrayElement} from '../util';

const mockDestinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edabt',
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    name: 'Amsterdam',
    pictures: []
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edwer',
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    name: 'Geneva',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edtyu',
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=4',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      }
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edsoo',
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    name: 'Vienna',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=5',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=6',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=7',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=8',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      }
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edyen',
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    name: 'Stockholm',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=9',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=10',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=11',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=12',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=13',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      }
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edtxt',
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    name: 'Rome',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=14',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=15',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=16',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=17',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      },
      {
        src: 'https://loremflickr.com/248/152?random=18',
        description: `${getRandomArrayElement(DESCRIPTIONS)}`
      }
    ]
  }
];

export {mockDestinations};
