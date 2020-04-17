import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../services/blog';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;  Swal
declare var Swal:any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog:Blog[];
  blogForm: FormGroup;
  options = { autoHide: false, scrollbarMinSize: 50 }; // scroll 
  constructor(private _blog: BlogService, private fb: FormBuilder, private router: Router ) { 
    this.blogForm = this.fb.group({
      title:['', Validators.required],
      author:['', Validators.required],
      date:['', Validators.required],
      content:['', [Validators.required, Validators.maxLength(200)]],
    })
  }

  ngOnInit() {
    this._blog.getData().subscribe(
      data => {
        this.blog = data
      }
    )
  }

  //save data
  public save(title: any, author: any, date: any, content: any) {
      this._blog.addBlog(title, author, date, content).subscribe();
      this.blogForm.reset();
      $("#blogModal").modal("hide");
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Your blog has been saved',
        showConfirmButton: false,
        timer: 1500
      })
  }

  //reset form
  public reset() {
    this.blogForm.reset()
  }

  // edit data
  public edit(id: any) {
   this.router.navigate([`/edit/${id}`])
  }

  // refresh 
  public refresh() {
    this._blog.getData().subscribe(
      data => this.blog = data
    )
  }
  // delete data
  public delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        let blogArr = this.blog;
      this._blog.deleteBlog(id).subscribe(
        data => {
          for(let i = 0; i < blogArr.length; i++) {
            if(blogArr[i]._id === id) {
              blogArr.splice(i, 1)
            }
          }
        }
      )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
           1500
        )
      }
    })  
  }

}
