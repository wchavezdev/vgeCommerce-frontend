import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as dayjs from 'dayjs';

import { Game } from '../../interfaces';
import { GamesService } from '../../services';
import { parseGameFormToObject, parseGameToForm } from '../../lib';
import { platforms, tags } from '../../data';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  isAdding = true;
  isLoading = true;
  gameId: number | undefined;
  game: Game | undefined;

  get tags() {
    return tags;
  }

  get platforms() {
    return platforms;
  }

  gameForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    coverImage: ['', []],
    gamePlayImages: [[]],
    releaseDate: ['', Validators.required],
    publisher: ['', [Validators.required]],
    developer: ['', [Validators.required]],
    price: ['', [Validators.required]],
    tags: [[]],
    platforms: [[]],
  });

  hasError(controlName: string, errorName: string) {
    return (
      this.gameForm.get(controlName)?.hasError(errorName) &&
      this.gameForm.get(controlName)?.touched
    );
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private gamesService: GamesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.isAdding = false;

      this.activatedRoute.params.subscribe((params) => {
        if (params['id']) {
          this.gameId = +params['id'];
          this.game = this.gamesService.getGameById(this.gameId!);
          this.isLoading = false;

          this.gameForm.patchValue(parseGameToForm(this.game!));
        } else {
          this.router.navigate(['/games']);
        }
      });
    } else {
      this.isLoading = false;
    }
  }

  submit() {
    if (this.gameForm.invalid) {
      this.gameForm.markAllAsTouched();
      return;
    }

    const formatedGame = parseGameFormToObject(this.gameForm.value);

    if (this.isAdding) {
      this.gamesService.create(formatedGame as Partial<Game>);
    } else {
      this.gamesService.update(formatedGame as Partial<Game>, this.gameId!);
    }

    this.router.navigate(['/games']);
  }
}
