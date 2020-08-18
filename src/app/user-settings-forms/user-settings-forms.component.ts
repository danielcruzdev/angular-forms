import { Component, OnInit } from '@angular/core';
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel){
    console.log("in onBlur: ", field.valid)
  }

  onSubmit(form: NgForm){
    console.log("in submit:", form.valid)
  }
}
