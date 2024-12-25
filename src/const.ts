import { LocationType } from './types';

export enum RoutePath {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NOT_FAUND = '*',
}

export enum LoginStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

export const Marcer = {
  DEFAULT: 'img/pin.svg',
  ACTIVE: 'img/pin-active.svg'
} as const;

export enum Cities {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

export const CitiesArry = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Locations: Record<string, LocationType> = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  }
};

export const DEFAULT_CITY = 'Paris';
