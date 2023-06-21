import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css'],
})
export class ConceptsComponent {
  constructor(router: Router) {}
  isOnFront: Boolean = false;
}
