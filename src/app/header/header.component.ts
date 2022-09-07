import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  route = 'recipes';

  @Output() routeChanged = new EventEmitter<string>();

  changeRoute(route: string) {
    this.route = route;

    this.routeChanged.emit(this.route);
  }
}
