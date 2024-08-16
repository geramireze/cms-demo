import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Field } from '@shared/interfaces/forms/field';

@Injectable({
  providedIn: 'root'
})
export class CreateFormService {

  constructor(private fb: FormBuilder) { }

  public createFormGroup(formGroup: FormGroup, formArray: Field[]): FormGroup {
    formGroup = this.fb.group({});
    formArray.forEach((campo: Field) => {
      if (campo.required) {
        formGroup.addControl(
          campo.item,
          this.fb.control('', Validators.required)
        );
      } else {
        formGroup.addControl(
          campo.item,
          this.fb.control('')
        );
      }
    });
    return formGroup;
  }
}
