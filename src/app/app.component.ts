import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { TemplateFormComponent } from "./form-validation/template-form/template-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateFormComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formvalidation';
}
