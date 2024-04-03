import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModel } from '../../models/common/select-model';

@Component({
  selector: 'gpa-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: SelectModel<string>[] = [];
  selectedOption: any;

  constructor() {}
  ngOnInit(): void {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  updateValue(event: any): void {
    this.selectedOption = event.target.value;
    this.onChange(this.selectedOption);
  }
}
