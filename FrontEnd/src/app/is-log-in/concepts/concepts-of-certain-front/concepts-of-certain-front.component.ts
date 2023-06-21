import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-concepts-of-certain-front',
  templateUrl: './concepts-of-certain-front.component.html',
  styleUrls: ['./concepts-of-certain-front.component.css'],
})
export class ConceptsOfCertainFrontComponent {
  constructor(route: Router) {}
}
