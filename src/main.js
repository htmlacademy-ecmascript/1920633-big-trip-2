import {render} from './render';
import EventPresenter from './presenter/event-presenter.js';
import FilterView from './view/filter-view.js';

const tripControls = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const eventPresenter = new EventPresenter({eventContainer: tripEvents});

render(new FilterView(), tripControls);

eventPresenter.init();
