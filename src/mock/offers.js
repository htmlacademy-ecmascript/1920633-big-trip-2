const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'event-offer-a',
        title: 'Upgrade to business class',
        price: 120
      },
      {
        id: 'event-offer-b',
        title: 'Upgrade to comfort class',
        price: 80
      },
      {
        id: 'event-offer-c',
        title: 'Add luggage',
        price: 50
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'event-offer-d',
        title: 'Upgrade to comfort class',
        price: 35
      },
      {
        id: 'event-offer-e',
        title: 'Choose seats',
        price: 15
      },
      {
        id: 'event-offer-f',
        title: 'Add luggage',
        price: 50
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'event-offer-g',
        title: 'Express',
        price: 120
      },
      {
        id: 'event-offer-h',
        title: 'Upgrade to business class',
        price: 100
      },
      {
        id: 'event-offer-i',
        title: 'Upgrade to comfort class',
        price: 60
      },
      {
        id: 'event-offer-j',
        title: 'Economy class',
        price: 40
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'event-offer-k',
        title: 'Upgrade to a business class',
        price: 200
      },
      {
        id: 'event-offer-l',
        title: 'Buy spa service',
        price: 150
      },
      {
        id: 'event-offer-m',
        title: 'Buy wi-fi',
        price: 110
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'event-offer-n',
        title: 'Sports car',
        price: 200
      },
      {
        id: 'event-offer-o',
        title: 'SUV',
        price: 150
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'event-offer-p',
        title: 'Upgrade to a business class',
        price: 210
      },
      {
        id: 'event-offer-q',
        title: 'Upgrade to comfort class',
        price: 160
      },
      {
        id: 'event-offer-r',
        title: 'Add luggage',
        price: 50
      },
      {
        id: 'event-offer-s',
        title: 'Add meal',
        price: 30
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'event-offer-t',
        title: 'Change check-out time',
        price: 90
      },
      {
        id: 'event-offer-u',
        title: 'Add breakfast',
        price: 20
      },
      {
        id: 'event-offer-v',
        title: 'Laundry',
        price: 45
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'event-offer-w',
        title: 'Breakfast',
        price: 30
      },
      {
        id: 'event-offer-x',
        title: 'Brunch',
        price: 40
      },
      {
        id: 'event-offer-y',
        title: 'Lunch',
        price: 45
      },
      {
        id: 'event-offer-z',
        title: 'Dinner',
        price: 50
      }
    ]
  }
];

const arrayOffers = mockOffers.map((item) => item.offers).flat();

export {mockOffers, arrayOffers};
