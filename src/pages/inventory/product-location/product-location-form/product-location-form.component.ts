import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalComponent } from '../../../../components/modal/modal.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ProductLocationModel,
  productLocationDefaultValues,
} from '../../../../models/inventory/product-location.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gpa-product-location-form',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './product-location-form.component.html',
})
export class ProductLocationFormComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() onClose: () => void = () => {};
  @Input() onSubmit: (model: ProductLocationModel) => void = () => {};
  @Input() model: ProductLocationModel = productLocationDefaultValues;

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
    this.model = { ...productLocationDefaultValues };
    this.form.setValue({ ...productLocationDefaultValues });
  };

  handleSubmit = () => {
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      const model = this.form.value as ProductLocationModel;
      this.onSubmit({
        ...this.model,
        ...model,
      });
      this.form.setValue({ ...productLocationDefaultValues });
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.model);
    this.form.setValue({ ...this.model });
  }
}
