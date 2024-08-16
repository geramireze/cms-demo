import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePasswordComponent),
      multi: true,
    },
  ],
})
export class CreatePasswordComponent implements ControlValueAccessor {
  public form: FormGroup;
  public passwordFieldType = 'password';
  public confirmPasswordFieldType = 'password';

  public passwordRequirements = {
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumeric: false,
    hasSpecial: false
  };

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', [Validators.required, this.passwordStrengthValidator.bind(this)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
    // Suscribir a los cambios del formulario
    this.form.valueChanges.subscribe(val => {
      if (this.form.valid) {
        this.onChange(val.password);
      } else {
        this.onChange(null);
      }
    });

    this.form.get('password')?.valueChanges.subscribe(value => {
      this.updatePasswordRequirements(value);
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue({ password: value, confirmPassword: '' });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.form.valueChanges.subscribe((val) => {
      if (this.form.valid) {
        this.onChange(val.password);
      } else {
        this.onChange(null);
      }
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notMatching: true };
  }

  passwordStrengthValidator(control: FormControl) {
    const password = control.value;
    if (!password) {
      return null;
    }

    this.updatePasswordRequirements(password);

    const hasUpperCase = /[A-Z]+/.test(password);
    const hasLowerCase = /[a-z]+/.test(password);
    const hasNumeric = /[0-9]+/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]+/.test(password);
    const isValidLength = password.length >= 8;

    const passwordValid =
      hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && isValidLength;

    return !passwordValid ? { passwordStrength: true } : null;
  }

  updatePasswordRequirements(password: string): void {
    this.passwordRequirements.minLength = password.length >= 8;
    this.passwordRequirements.hasUpperCase = /[A-Z]+/.test(password);
    this.passwordRequirements.hasLowerCase = /[a-z]+/.test(password);
    this.passwordRequirements.hasNumeric = /[0-9]+/.test(password);
    this.passwordRequirements.hasSpecial = /[!@#$%^&*(),.?":{}|<>]+/.test(password);
  }

  togglePasswordFieldVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordFieldVisibility(): void {
    this.confirmPasswordFieldType =
      this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }
}
