import { Component } from '@angular/core';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";

@Component({
  selector: 'app-home',
  imports: [RegistrationFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
