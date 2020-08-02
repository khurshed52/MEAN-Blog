import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Employe } from '../services/employe';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { of, from } from 'rxjs';
import { mergeMap, groupBy, map, take, toArray, reduce } from 'rxjs/operators';

declare var Swal:any
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  public employes: Employe[];
  // public exampleForm: FormGroup;
  public quilForm: FormGroup;
  public editing: boolean = false;
  public editingProduct: Employe;
  public textArr:string;
  public car = 'Nisaan, BMW, Toyota';
  public data:any =[];
  public fruits:any = [
    {name: 'Apple', price:100},
    {name: 'Orange', price:80},
    {name: 'Plum', price:120}
  ];

  employe
  constructor(private employeServices: EmployeService,  private fb: FormBuilder, private router: Router) {
    this.quilForm = this.fb.group({
      text: ['']
    })
  }

  ngOnInit(): void {
   // this.createForm();
    this.employeServices.getEmployes().subscribe(data => {
      this.employes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Employe;
      })
    });

    const carData = of('khurshed', 'khan');

    carData.pipe(toArray()).subscribe(res=> {
      console.log(res)
    });

    const fruitsData = from(this.fruits);

    fruitsData.pipe(
      take(1),
      toArray()
      )
      .subscribe(res=> {
      this.data = res
    })
  }

  // createForm() {
  //   this.exampleForm = this.fb.group({
  //     name: [''],
  //     age: ['' ]
  //   });
  // }

  // onSubmit(value: { name: any; age: string; }){
  //   this.employeServices.createEmployes(value).then(
  //     () => {
  //       this.exampleForm.reset()
  //     }
  //   )
  // }
  
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

  onSubmit():void {
    this.textArr = this.quilForm.get('text').value
   // this.textArr.push(this.quilForm.value)
   console.log(this.quilForm.get('text').value)
  }

}
