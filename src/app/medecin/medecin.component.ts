import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.css'
})
export class MedecinComponent implements OnInit{

  ngOnInit(): void {
    //console.log("Hello medecin");
    //console.log(this.medecinsDetails);
}
formation:string="Angular";
logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png";
medecins : string[] = ["Khaled","Sofine","Amine","Haythem","Salah"];

medecinsDetails : Medecin[]=[
  {"nom":"Mezghich","prenom":"Amine","age":38,"grade":"Generaliste","photo":"https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"},
  {"nom":"Ben Salah","prenom":"Salah","age":39,"grade":"Radio","photo":"https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"},
  {"nom":"Khaled","prenom":"Khaled","age":40,"grade":"Chirurgie","photo":"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"},
  {"nom":"Haithem","prenom":"Ben Haithem","age":32,"grade":"Generaliste","photo":"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"},
  {"nom":"Ben Sofien","prenom":"Sofien","age":29,"grade":"Ophtalmo","photo":"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png"}
];
}
