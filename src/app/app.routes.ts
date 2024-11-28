import { Routes } from '@angular/router';
import { TemplateFormComponent } from './form-validation/template-form/template-form.component';
import { ReactiveFormComponent } from './form-validation/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:'templateForm',
        component: TemplateFormComponent
    },
    {
        path:'reactiveForm',
        component: ReactiveFormComponent
    }
];
