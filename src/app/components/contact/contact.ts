import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs,{ EmailJSResponseStatus } from 'emailjs-com';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';
  isSending = false; // Pour éviter les envois multiples

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onsubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.sendEmail(); // ← Appel à EmailJS
    // Handle form submission logic here
    this.successMessage = 'Votre message a été envoyé avec succès!';
    this.contactForm.reset();
    this.submitted = false;
    }
    
    private sendEmail(): void {
      this.isSending = true;
      if (this.contactForm.invalid) {
        this.contactForm.markAllAsTouched();
        return;
      }
      
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };
      
      emailjs.send(
        'service_tznq9a9',
        'template_dmavtiw',
        templateParams,
        't49S2i4ALBalpcWev'
      )
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès');
        this.contactForm.reset();
       })
  .catch((error) => {
    console.error('FAILED...', error);
    alert('Erreur lors de l’envoi du message');
  });
}

  }
