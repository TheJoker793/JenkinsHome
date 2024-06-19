import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  addContact(contactForm:any){
    alert(contactForm.nom+" "+contactForm.prenom+" "+contactForm.email+" "+contactForm.message);
  }
}
