import { Component } from '@angular/core';
import { slideInAnimation } from './route-animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'SelectDay';

  constructor(private router: Router, private route: ActivatedRoute) { }

}
