import { Injectable } from '@angular/core';
import { users } from '../data/users';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = users;

  constructor() {}

  getGameById(id: string): User | undefined {
    return this.users.find((user) => user.uid === id);
  }

  create(user: Partial<User>) {
    this.users.push({
      ...user
    } as User);
  }

  update(user: Partial<User>, userUid: string) {
    this.users = this.users.map((u) =>
      u.uid === userUid ? { ...u, ...user } : u
    );
  }

  delete(uId: string) {
    this.users = this.users.filter((user) => user.uid !== uId);
  }
}
