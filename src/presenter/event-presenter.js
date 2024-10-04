import AddNewPointView from '../view/add-new-point-view';
import EditView from '../view/edit-point-view';
import PointView from '../view/event-list-point-view';
import ListView from '../view/event-list-view';
import SortView from '../view/sort-view';
import {render, RenderPosition} from '../render';

export default class EventPresenter {
  listComponent = new ListView();

  constructor({eventContainer, pointsModel}) {
    this.eventContainer = eventContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.boardOffers = [...this.pointsModel.getOffers()];
    this.boardDestinations = [...this.pointsModel.getDestinations()];

    render(new SortView(), this.eventContainer);
    render(this.listComponent, this.eventContainer);
    render(new AddNewPointView({point: this.boardPoints[0], destinations: this.boardDestinations[0]}), this.listComponent.getElement());
    render(new EditView({point: this.boardPoints[0], destinations: this.boardDestinations[0]}), this.listComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointView({point: this.boardPoints[i]}), this.listComponent.getElement());
    }
  }
}
