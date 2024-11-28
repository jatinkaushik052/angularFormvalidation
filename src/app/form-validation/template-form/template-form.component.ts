import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  myObj: any={
    firstname:'',
    lastname:'',
    username:'',
    phonenumber:'',
    city:'',
    state:'',
    zipCode:'',
    isTerms:false
  }
  formValue: any;
  onSubmit(){
    debugger;
    this.formValue= this.myObj;
  }

}
