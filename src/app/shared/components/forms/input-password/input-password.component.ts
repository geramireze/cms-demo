import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Field } from '@shared/interfaces/forms/field';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
})
export class InputPasswordComponent implements ControlValueAccessor {

  public field = input.required<Field>();
  public passwordFieldType = 'password';

  value!: string;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  updateValue(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  }

  togglePasswordFieldVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === this.field().type ? 'text' : this.field().type;
  }

}
