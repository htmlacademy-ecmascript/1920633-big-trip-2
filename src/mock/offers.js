const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'a4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to business class',
        price: 120
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to comfort class',
        price: 80
      },
      {
        id: 'c4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Add luggage',
        price: 50
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'd4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to comfort class',
        price: 35
      },
      {
        id: 'e4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Choose seats',
        price: 15
      },
      {
        id: 'f4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Add luggage',
        price: 50
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'g4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Express',
        price: 120
      },
      {
        id: 'h4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to business class',
        price: 100
      },
      {
        id: 'i4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to comfort class',
        price: 60
      },
      {
        id: 'j4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Economy class',
        price: 40
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'k4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class',
        price: 200
      },
      {
        id: 'l4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Buy spa service',
        price: 150
      },
      {
        id: 'm4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Buy wi-fi',
        price: 110
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'n4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Sports car',
        price: 200
      },
      {
        id: 'o4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'SUV',
        price: 150
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'p4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class',
        price: 210
      },
      {
        id: 'q4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to comfort class',
        price: 160
      },
      {
        id: 'r4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Add luggage',
        price: 50
      },
      {
        id: 's4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Add meal',
        price: 30
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 't4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Change check-out time',
        price: 90
      },
      {
        id: 'u4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Add breakfast',
        price: 20
      },
      {
        id: 'v4c3e4e6-9053-42ce-b747-e281314baa31',
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
        id: 'w4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Breakfast',
        price: 30
      },
      {
        id: 'x4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Brunch',
        price: 40
      },
      {
        id: 'y4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Lunch',
        price: 45
      },
      {
        id: 'z4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Dinner',
        price: 50
      }
    ]
  }
];

const arrayOffers = mockOffers.map((item) => item.offers).flat();

export {mockOffers, arrayOffers};
