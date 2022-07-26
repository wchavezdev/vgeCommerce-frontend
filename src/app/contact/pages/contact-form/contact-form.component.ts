import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  submitted = false;

  contactForm = this.fb.group({
    fullName: ['', [Validators.required]],
    cellphone1: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*'),
      ],
    ],
    cellphone2: [
      '',
      [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*'),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    attachment: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  hasError(controlName: string) {
    return (
      this.contactForm.get(controlName)?.errors &&
      this.contactForm.get(controlName)?.touched
    );
  }

  getErrorMessage(controlName: string) {
    if (this.hasError(controlName)) {
      return this.contactForm.get(controlName)?.errors?.['required']
        ? 'El campo es requerido'
        : this.contactForm.get(controlName)?.errors?.['minlength']
        ? 'El campo debe tener al menos 10 caracteres'
        : this.contactForm.get(controlName)?.errors?.['maxlength']
        ? 'El campo debe tener como máximo 10 caracteres'
        : this.contactForm.get(controlName)?.errors?.['pattern']
        ? 'El campo debe contener solo números'
        : this.contactForm.get(controlName)?.errors?.['email']
        ? 'El campo debe ser un email válido'
        : '';
    }

    return '';
  }

  submit() {
    if (this.contactForm.invalid) {
      const errors = {
        fullName: this.contactForm.controls.fullName.errors,
        cellphone1: this.contactForm.controls.cellphone1.errors,
        email: this.contactForm.controls.email.errors,
        message: this.contactForm.controls.message.errors,
      };

      console.log(errors);

      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitted = true;
  }
}
