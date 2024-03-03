import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalComponent } from '../../../../components/modal/modal.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CategoryModel,
  categoryModelDefaultValues,
} from '../../../../models/inventory/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gpa-category-form',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() onClose: () => void = () => {};
  @Input() onSubmit: (model: CategoryModel) => void = () => {};
  @Input() model: CategoryModel = categoryModelDefaultValues;

  form = new FormGroup({
    id: new FormControl(this.model.id),
    name: new FormControl(this.model.name, [
      Validators.required,
      Validators.maxLength(50),
    ]),
    description: new FormControl(this.model.description),
    enabled: new FormControl(this.model.enabled),
  });

  get name() {
    return this.form.get('name');
  }

  handleClose = () => {
    this.onClose();
    this.model = { ...categoryModelDefaultValues };
    this.form.setValue({ ...categoryModelDefaultValues });
  };

  handleSubmit = () => {
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      const model = this.form.value as CategoryModel;
      this.onSubmit({
        ...this.model,
        ...model,
      });
      this.form.setValue({ ...categoryModelDefaultValues });
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.form.setValue({ ...this.model });
  }
}
