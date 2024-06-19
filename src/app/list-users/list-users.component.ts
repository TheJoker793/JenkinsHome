import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  //injection d'un service dans le composant via le constructeur
  constructor(private userService: UserService) { }
 users : any;
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data=>
        {
         // console.log(data);
          this.users = data;
        },
      error => console.log(error)
    );
  }
}
