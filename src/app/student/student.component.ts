import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public data:string;
  public dataNew:any;

  constructor(private blog: BlogService) { }
  
  @Input() myInput:string;
  ngOnInit(): void {
    this.blog.getDataBlog().subscribe(
      res => {
        console.log(res);
        this.dataNew = res
      }
    )
  }

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };




}
