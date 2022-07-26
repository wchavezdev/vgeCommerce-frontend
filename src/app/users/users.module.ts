import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './pages/user-add/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent, AddUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
