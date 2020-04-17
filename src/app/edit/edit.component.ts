import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Employe } from '../services/employe';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  exampleForm: FormGroup;
  item: Employe[];
  constructor( public employe: EmployeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
  }

}
