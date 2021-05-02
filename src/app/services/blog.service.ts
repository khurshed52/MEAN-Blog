import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  private blogUrl= 'https://user-mean-test.herokuapp.com/api/blog';
  private blogDelUrl= 'https://user-mean-test.herokuapp.com/api/blog/';
  private dataUrl = 'http://localhost:3000/api/data';
  
  // get blog
  getData():Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl)
  }

  getBlogByIdWebApi(id: number):Observable<Blog[]>{
    return this.http.get<Blog[]>(this.blogUrl + "/" + id)
  }

  // get blog by id
  getBlogById(id: string) {
    return this.http.get(this.blogDelUrl + id)
  }

  //post blog
  addBlog(blog:Blog) {
    return this.http.post(this.blogUrl, blog)
  }

  deleteBlog(id: string) {
    return this.http.delete(this.blogDelUrl + id)
  }

  updateBlog(title: any, author: any, date: any, content: any, id: string) {
    const obj = {
      title,
      author,
      date,
      content
      };
    this.http.put(this.blogDelUrl + id, obj)
      .subscribe(() => console.log('Done'));
  }
  
  getDataBlog():Observable<any> {
    return this.http.get(this.dataUrl)
  }
 
}
