import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // injection d'un objet HttpClient dans le constructeur
  constructor(private http:HttpClient) { }
  getPosts()
  {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
