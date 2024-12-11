import { OfferType } from '../types';

export const Offers: OfferType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'Room',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514,
        longitude: 4.67387,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 209,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514,
        longitude: 4.67387,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Wood and stone place',
    type: 'Apartment',
    price: 306,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514,
        longitude: 4.67387,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 165,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514,
        longitude: 4.67387,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg'
  }

];
