import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Contact form submitted', this.contact);
    // Here, you can handle the form submission, e.g., send data to an API
  }
}
