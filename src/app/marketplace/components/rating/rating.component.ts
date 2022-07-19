import { Component, Input, OnInit } from '@angular/core';

import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  farStar = farStar;

  maxStars = Array(5)
    .fill(0)
    .map((x, i) => i);

  @Input() rating!: number;

  constructor() {}

  ngOnInit(): void {}
}
