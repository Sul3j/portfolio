import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) return;

    this.http.post('https://szymonsulejczak.com/email/send', this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Wiadomość wysłana pomyślnie!';
        this.errorMessage = '';
        this.contactForm.reset();
        this.toastr.success(this.successMessage);
      },
      error: () => {
        this.errorMessage = 'Błąd podczas wysyłania wiadomości!';
        this.successMessage = '';
        this.toastr.error(this.errorMessage);
      }
    });
  }
}
