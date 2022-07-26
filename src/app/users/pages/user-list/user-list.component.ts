import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor(private usersService: UsersService) {}

  get users() {
    return this.usersService.users;
  }

  ngOnInit(): void {}

  delete(uId: string) {
    alert('Está seguro de eliminar el juego?');
    this.usersService.delete(uId);
  }
}
