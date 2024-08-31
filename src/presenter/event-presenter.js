import AddNewPointView from '../view/add-new-point-view';
import EditView from '../view/edit-point-view';
import PointView from '../view/event-list-point-view';
import ListView from '../view/event-list-view';
import SortView from '../view/sort-view';
import {render, RenderPosition} from '../render';

export default class EventPresenter {
  listComponent = new ListView();

  constructor({eventContainer}) {
    this.eventContainer = eventContainer;
  }

  init() {
    render(new SortView(), this.eventContainer);
    render(this.listComponent, this.eventContainer);
    render(new AddNewPointView(), this.listComponent.getElement());
    render(new EditView(), this.listComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listComponent.getElement());
    }
  }
}
