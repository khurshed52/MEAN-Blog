import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student} from '../services/students';
declare var $:any;
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public student=[]
  constructor(private _student: StudentService) { }

  ngOnInit(): void {
    // get data with subscribe 
    this._student.getStudents().subscribe (
      res => {
        console.log(res);
        this.student = res;
      }
    )
  }

  // show drwaer
  public showDrawer(name: any) {
    $('.drwaer').addClass('move_right');
    console.log(name)
  }
}
