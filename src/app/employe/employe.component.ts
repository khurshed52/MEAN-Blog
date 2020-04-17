import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Employe } from '../services/employe';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var Swal:any
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  public employes: Employe[];
  public exampleForm: FormGroup;
  public editing: boolean = false;
  public editingProduct: Employe;
  employe
  constructor(private employeServices: EmployeService,  private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.employeServices.getEmployes().subscribe(data => {
      this.employes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Employe;
      })
    });
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: [''],
      age: ['' ]
    });
  }

  onSubmit(value: { name: any; age: string; }){
    this.employeServices.createEmployes(value).then(
      () => {
        this.exampleForm.reset()
      }
    )
  }
  
  edit(event: any, employe: Employe) {
    this.editing = !this.editing;
    this.editingProduct = employe;
  }

  updateEmploye() {
    this.employeServices.updateEmployes(this.editingProduct);
    this.editingProduct = {} as Employe;
    this.editing = false;
  }


  delete(event: any, employe: Employe) {
    this.employeServices.deleteEmployes(employe);
  }

}
