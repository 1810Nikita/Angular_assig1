import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  public addemployeeform!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private toastService: NgToastService) { }

  ngOnInit(): void {
    this.addemployeeform = this.fb.group({
      empid: [''],
      name: [''],
      contactNo: [''],
      email: [''],
      gender: [''],
      skills: this.fb.array([
        this.fb.group({
          skill: ['', Validators.required],
          exp: ['']
        })
      ])
    });
  }

  get skills() {
    return this.addemployeeform.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.group({
      skill: ['', Validators.required],
      exp: ['']
    }));
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }

  submit() {
    this.api.postRegistration(this.addemployeeform.value);
    this.addemployeeform.reset();
  }

}

