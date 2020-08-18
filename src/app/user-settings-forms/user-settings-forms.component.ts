import { Component, OnInit } from '@angular/core';
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

  originalSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  userSettings : UserSettings = {
    ...this.originalSettings,

  }
  startDate: Date;
  singleModel = 'On';
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getTypes();
    this.startDate = new Date();
  }

  onBlur(field: NgModel){
    console.log("in on Blur: ", field.valid)
  }

  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;  
  }

  onSubmit(form: NgForm){
    console.log("in submit:", form.valid)


    // if(form.valid){
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log("Success: ", result),
    //     error => this.onHttpError(error)
    //   );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = "Please fix the errors!"
    // }
  }
}
