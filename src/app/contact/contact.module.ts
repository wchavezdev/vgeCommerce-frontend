import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule],
})
export class ContactModule {}
