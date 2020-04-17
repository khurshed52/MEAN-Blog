import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Employe } from './employe'
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employeDoc: AngularFirestoreDocument<Employe>;

  constructor(private fire: AngularFirestore) { }
  getEmployes() {
    return this.fire.collection('Employees').snapshotChanges();
    }

    createEmployes(value: { name: any; age: string; }){
      return this.fire.collection('Employees').add({
        name: value.name,
        age: parseInt(value.age),
      });
    }

    updateEmployes(employe: Employe){
      this.employeDoc = this.fire.doc(`Employees/${employe.id}`);
      this.employeDoc.update(employe);
    }


  deleteEmployes(employe: Employe) {
    this.employeDoc = this.fire.doc(`Employees/${employe.id}`);
    this.employeDoc.delete();
  }
  



}
