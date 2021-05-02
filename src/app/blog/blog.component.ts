import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../services/blog';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
declare var Swal:any;
declare var $:any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog:Blog[];
  public showModal:boolean = false;
  blogForm: FormGroup;
  options = { autoHide: false, scrollbarMinSize: 50 }; // scroll 
  public loading:boolean = true;
  id:any
  constructor(private _blog: BlogService, private fb: FormBuilder, private router: Router ) { 
    this.blogForm = this.fb.group({
      title:['', Validators.required],
      author:['', Validators.required],
      date:['', Validators.required],
      content:['', Validators.required],
      val:['']
    })
  }

  editorStyle = {
    height: '200px'
  };

  ngOnInit() {
    this.getBlog();
    this._blog.getBlogByIdWebApi(101).subscribe((data) => console.log(data));
  }


  // get blog
  getBlog() {
    this._blog.getData().subscribe(
      data => {
        this.blog = data;
        this.loading = false
      }
    )
  }

  //save data
  public onSubmit() {
    if(this.blogForm.valid) {
      this._blog.addBlog(this.blogForm.value).subscribe((res)=> {
        console.log(res);
        this.getBlog();
        this.blogForm.reset();
        $("#blogModal").modal("hide");
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Your blog has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      });

    }
     
  }

  //reset form
  public reset() {
    this.blogForm.reset()
  }

  // edit data
  public edit(id: any) {
   this.router.navigate([`/edit/${id}`])
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
        this._blog.deleteBlog(id).subscribe((res)=> {
          this.getBlog();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
             1500
          )
        })
      }
    })  
  }

}
