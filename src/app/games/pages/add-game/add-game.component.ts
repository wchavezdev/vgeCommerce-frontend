import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Game, GamePlatform, GameTag } from '../../interfaces';
import { GamesService } from '../../services';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  isAdding = true;
  isLoading = true;

  gameId: string | undefined;
  game: Game | undefined;

  tags: GameTag[] = [
    { id: 1, name: 'RPG' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Open World' },
    { id: 4, name: 'Adventure' },
  ];

  platforms: GamePlatform[] = [
    { id: 1, name: 'PC' },
    { id: 2, name: 'PlayStation 4' },
    { id: 3, name: 'Xbox One' },
    { id: 4, name: 'Nintendo Switch' },
  ];

  gameForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    coverImage: ['', []],
    gamePlayImages: [[]],
    releaseDate: [new Date(), [Validators.required]],
    publisher: ['', [Validators.required]],
    developer: ['', [Validators.required]],
    price: [0, [Validators.required]],
    tags: [[]],
    platforms: [[]],
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.isAdding = false;

      this.activatedRoute.params.subscribe((params) => {
        if (params['id']) {
          this.gameId = params['id'];
          this.game = this.gamesService.getGameById(+this.gameId!);
          this.isLoading = false;

          this.gameForm.patchValue({
            name: this.game?.name,
            description: this.game?.description,
            releaseDate: this.game?.releaseDate,
            publisher: this.game?.publisher,
            developer: this.game?.developer,
            price: this.game?.price,
            tags: this.tags
              .filter((tag) => this.game?.tags.includes(tag.name))
              .map((t) => t.id) as never[],
            platforms: this.platforms
              .filter((platform) =>
                this.game?.platforms.includes(platform.name)
              )
              .map((p) => p.id) as never[],
          });
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

    const formatedGame = {
      ...this.gameForm.value,
      tags: this.gameForm.value.tags?.map(
        (tag) => this.tags.find((t) => t.id === tag)!.name
      ),
      platforms: this.gameForm.value.platforms?.map(
        (platform) => this.platforms.find((p) => p.id === platform)!.name
      ),
      coverImage: '',
      gamePlayImages: [],
    };

    if (this.isAdding) {
      this.gamesService.create(formatedGame as Partial<Game>);
    } else {
      this.gamesService.update(formatedGame as Partial<Game>, +this.gameId!);
    }
  }
}
