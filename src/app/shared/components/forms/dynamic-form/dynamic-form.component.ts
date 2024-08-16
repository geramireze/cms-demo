import { Component, ContentChildren, QueryList, TemplateRef, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Field } from '@shared/interfaces/forms/field';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { OtpComponent } from '../otp/otp.component';
import { CreatePasswordComponent } from '../create-password/create-password.component';
import { InputPasswordComponent } from '../input-password/input-password.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CreatePasswordComponent,
    InputPasswordComponent,
    OtpComponent,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  public fields = input.required<Field[]>();
  public formGroupFields = input.required<FormGroup>();
  // public onSubmit = output();
  public labelBtn = input.required<string>();

  @ContentChildren(Component, { read: TemplateRef }) children: QueryList<any> | undefined;

  public formSubmit(e: Event): void {
    e.preventDefault();
    // this.onSubmit.emit(this.formGroupFields().value);
    console.log('el formgroup -->', this.formGroupFields());
  }
}
