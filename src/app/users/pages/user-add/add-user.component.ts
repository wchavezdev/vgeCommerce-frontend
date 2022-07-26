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




  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {

  }

  submit() {

  }

}
