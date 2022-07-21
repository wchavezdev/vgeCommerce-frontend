import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Game } from '../../interfaces';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent implements OnInit {
  isAdding = true;
  gameId: string | null = null;
  game: Game | null = null;

  tags = [
    { id: 1, name: 'RPG' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Open World' },
    { id: 4, name: 'Adventure' },
  ];

  platforms = [
    { id: 1, name: 'PC' },
    { id: 2, name: 'PlayStation 4' },
    { id: 3, name: 'Xbox One' },
    { id: 4, name: 'Nintendo Switch' },
  ];

  gameForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    coverImage: ['', [Validators.required]],
    gamePlayImages: this.fb.array([this.fb.control('')]),
    releaseDate: ['', [Validators.required]],
    publisher: ['', [Validators.required]],
    developer: ['', [Validators.required]],
    price: ['', [Validators.required]],
    tags: this.fb.array([this.fb.control(3)]),
    platforms: this.fb.array([this.fb.control('')]),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.isAdding = false;

      this.activatedRoute.params.subscribe((params) => {
        if (params['id']) {
          this.gameId = params['id'];
        } else {
          this.router.navigate(['/games']);
        }
      });
    }
  }
}
