import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  private isLocalStorageAvailable=typeof sessionStorage!=='undefined'

  authenticate(username:string, password:string) {
    if (username === "amine" && password === "1234") {
      if (this.isLocalStorageAvailable) {
        sessionStorage.setItem('username', username)  
      }
      

      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
