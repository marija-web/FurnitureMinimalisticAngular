import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { IFormMessage, IFormMessageRequest } from '../interfaces/i-form-message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../assets/layout/styles/bootstrap.min.css', '../../assets/layout/styles/style.css']
})
export class ContactComponent implements OnInit {

  public form:FormGroup;
  public formMessage:IFormMessage[]=[];

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required,  Validators.pattern(/\b[A-ZČĆŽĐŠ][a-zčćđšž]{2,15}$/)]),
      lastName: this.formBuilder.control("", [Validators.required,  Validators.pattern(/\b[A-ZČĆŽĐŠ][a-zčćđšž]{2,20}$/)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      message: this.formBuilder.control("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  beforeSending(){
    let formValue: IFormMessageRequest = this.form.getRawValue();

    let dataToSend: IFormMessageRequest = {
      firstName : formValue.firstName,
      lastName : formValue.lastName,
      email : formValue.email,
      message : formValue.message
    };

    return dataToSend;
  }

  saveMessage():void{
    if(this.form.valid){
      var data = this.beforeSending();
      this.formMessage[0]=data;
      this.form.reset();
    }
  }
}
