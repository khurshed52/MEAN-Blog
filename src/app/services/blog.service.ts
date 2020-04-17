import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  private blogUrl= 'http://localhost:3000/api/blog';
  private blogDelUrl= 'http://localhost:3000/api/blog/';

  
  // get blog
  getData():Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl)
  }

  //post blog
  addBlog(title: any, author: any, date: any, content: any) {
    const blog = {
      title, author, date, content
    }
    return this.http.post(this.blogUrl, blog)
  }

  deleteBlog(id: string) {
    return this.http.delete(this.blogDelUrl + id)
  }
 
}
