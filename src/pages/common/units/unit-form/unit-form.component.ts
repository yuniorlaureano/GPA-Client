import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalComponent } from '../../../../components/modal/modal.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  UnitModel,
  unitModelDefaultValues,
} from '../../../../models/common/unit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gpa-unit-form',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './unit-form.component.html',
})
export class UnitFormComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() onClose: () => void = () => {};
  @Input() onSubmit: (model: UnitModel) => void = () => {};
  @Input() model: UnitModel = unitModelDefaultValues;

  form = new FormGroup({
    id: new FormControl(this.model.id),
    code: new FormControl(this.model.code),
    name: new FormControl(this.model.name, [
      Validators.required,
      Validators.maxLength(50),
    ]),
    description: new FormControl(this.model.description),
  });

  get name() {
    return this.form.get('name');
  }

  handleClose = () => {
    this.onClose();
    this.model = { ...unitModelDefaultValues };
    this.form.setValue({ ...unitModelDefaultValues });
  };

  handleSubmit = () => {
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      const model = this.form.value as UnitModel;
      this.onSubmit({
        ...this.model,
        ...model,
      });
      this.form.setValue({ ...unitModelDefaultValues });
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.model);
    this.form.setValue({ ...this.model });
  }
}
