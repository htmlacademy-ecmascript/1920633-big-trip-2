import {render} from './render';
import EventPresenter from './presenter/event-presenter.js';
import FilterView from './view/filter-view.js';
import PointsModel from './model/points-model.js';

const tripControls = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const eventPresenter = new EventPresenter({
  eventContainer: tripEvents,
  pointsModel,
});

render(new FilterView(), tripControls);

eventPresenter.init();
