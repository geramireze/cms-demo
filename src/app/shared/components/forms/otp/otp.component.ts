import { Component, OnInit, forwardRef, inject, input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator } from '@angular/forms';
import { Field } from '@shared/interfaces/forms/field';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OtpComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => OtpComponent),
      multi: true
    }
  ]
})
export class OtpComponent implements ControlValueAccessor, Validator, OnInit{

  length = input(6);
  field = input.required<Field>();

  otpFormControls: FormControl[] = [];

  value: string = '';
  disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    this.otpFormControls = Array(this.length()).fill(0).map(() => new FormControl(''));
  }

  writeValue(value: string): void {
    this.value = value || '';
    if (this.value.length === this.length()) {
      this.otpFormControls.forEach((ctrl, i) => {
        ctrl.setValue(this.value[i] || '');
      });
    } else {
      this.otpFormControls.forEach(ctrl => ctrl.setValue(''));
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.otpFormControls.forEach(ctrl => {
      if (isDisabled) {
        ctrl.disable();
      } else {
        ctrl.enable();
      }
    });
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.value.length === this.length() ? null : { otp: 'Incomplete OTP' };
  }

  onInput(event: any, index: number): void {
    const input = event.target.value;
    if (input && !/^\d$/.test(input)) {
      event.target.value = '';
      return;
    }

    this.otpFormControls[index].setValue(input);
    this.updateValue();

    if (input.length === 1 && index < this.length() - 1) {
      const nextInput = document.querySelector(`#otp-input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLElement).focus();
      }
    } else if (input.length === 0 && index > 0) {
      const prevInput = document.querySelector(`#otp-input-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLElement).focus();
      }
    }
  }

  updateValue(): void {
    const otpArray = this.otpFormControls.map(ctrl => ctrl.value).join('');
    this.value = otpArray;
    this.onChange(this.value);
    this.onTouched();
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && this.otpFormControls[index].value === '' && index > 0) {
      const prevInput = document.querySelector(`#otp-input-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLElement).focus();
      }
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

}
