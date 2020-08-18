import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student} from './students'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  //student url
  private studentUrl = 'https://student-management-api-1u3cd4j7s.now.sh/students';

  // student get method 
  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl)
  }
}
