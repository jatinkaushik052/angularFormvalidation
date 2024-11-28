import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  myForm: FormGroup= new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    username: new FormControl("",[Validators.email,Validators.minLength(3)]),
    city: new FormControl("",[Validators.required,Validators.minLength(3)]),
    state: new FormControl("",[Validators.required]),
    zipCode: new FormControl("",[Validators.required]),
    isTerms: new FormControl("",[Validators.required]),

  })

  formValue: any;
  onSubmit(){
    debugger;
    this.formValue= this.myForm.value;
  }
}
