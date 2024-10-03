import {mockDestinations} from '../mock/destinations';
import {mockOffers} from '../mock/offers';
import {getRandomPoint} from '../mock/points';

const WAYPOINT_COUNT = 3;

export default class PointsModel {
  points = Array.from({length: WAYPOINT_COUNT}, getRandomPoint);
  offers = mockOffers;
  destinations = mockDestinations;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}
