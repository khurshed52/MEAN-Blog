import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../services/blog';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateBlogForm: FormGroup;
  id: string;
  blog: any = []
  constructor( public BlogService: BlogService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,) {
      this.blogForm()
     }

     blogForm() {
      this.updateBlogForm = this.fb.group({
        title:['', Validators.required],
        author:['', Validators.required],
        date:['', Validators.required],
        content:['', Validators.required],
      })
     }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.BlogService.getBlogById(this.id).subscribe(res => {
        this.blog = res;
        this.updateBlogForm.get('title').setValue(this.blog.title);
        this.updateBlogForm.get('author').setValue(this.blog.author);
        this.updateBlogForm.get('date').setValue(this.blog.date);
        this.updateBlogForm.get('content').setValue(this.blog.content);
      });
    });
  }

  public update(title: any, author: any, date: any, content: any):void {
    this.route.params.subscribe(params => {
      this.BlogService.updateBlog(title, author, date, content, params['id']);
      this.router.navigate(['blog']);
    });
  } 

}
