import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../interfaces';
import { UsersService } from '../../services/user.service';
@Component({
  selector: 'app-add-user',
  template: '<p> Hola mundo </p>',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  isAdding = true;
  isLoading = false;

  uId: string | undefined;
  user: User | undefined;

  /*
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
  */


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    /*
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
    */
  }

  submit() {
    /*
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
    */
  }

}
