import { Component, HostListener, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Field, Options } from '@shared/interfaces/forms/field';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements ControlValueAccessor {
  field = input.required<Field>();

  filteredOptions: Options[] = [];
  inputValue = '';
  isOpen = false;
  selectedOptionValue: any = null;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  writeValue(value: any): void {
    const selectedOption = (this.field().options as Options[]).find(
      (option: Options) => option.value === value
    );
    this.selectedOptionValue = value;
    this.inputValue = selectedOption ? selectedOption.label : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implementar según sea necesario
  }

  onInputFocus(event: Event) {
    if (!this.selectedOptionValue) {
      this.isOpen = true;
    }
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value.trim() === '') {
      this.filteredOptions = this.field().options as Options[];
    }
  }

  onInputChange(event: Event) {
    this.isOpen = true;
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement ? inputElement.value : '';
    if (value !== null && value !== undefined) {
      this.filteredOptions = (this.field().options as Options[]).filter(
        (option: Options) =>
          option.label.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  selectOption(option: Options) {
    if (option) {
      this.inputValue = option.label;
      this.selectedOptionValue = option.value;
      this.onChange(option.value);
      this.onTouched();
      this.filteredOptions = [];
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen; // Alterna entre abrir y cerrar el menú
    if (this.isOpen) {
      this.filteredOptions = this.field().options as Options[];
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.container-input')) {
      this.isOpen = false; // Cierra el menú al hacer clic fuera del componente
    }
  }

}
