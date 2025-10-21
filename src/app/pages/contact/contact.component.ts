import { Component, ViewChild } from '@angular/core';


import { NgForm } from '@angular/forms';interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  formSubmitted = false;
  
  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adresse',
      value: 'Tunis, France'
    },
    {
      icon: 'fas fa-globe',
      title: 'Site Web',
      value: 'www.monportfolio.com',
      link: 'https://www.monportfolio.com'
    }
  ];


 submitForm() {
  
  }

  
  resetForm() {
    this.formSubmitted = false;
    this.contactForm.resetForm();
  }
}