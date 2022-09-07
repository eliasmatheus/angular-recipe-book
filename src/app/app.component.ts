import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  route = 'recipes';

  onRouteChange(event: string) {
    this.route = event;
  }
}
