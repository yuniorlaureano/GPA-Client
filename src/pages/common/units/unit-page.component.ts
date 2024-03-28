import { Component } from '@angular/core';
import { UnitTableComponent } from './unit-table/unit-table.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { UnitFormComponent } from './unit-form/unit-form.component';
import {
  UnitModel,
  unitModelDefaultValues,
} from '../../../models/common/unit.model';
import { UnitService } from '../../../services/common/unit.service';
import { ConfirmComponent } from '../../../components/confirm/confirm.component';

@Component({
  selector: 'app-unit-page',
  standalone: true,
  imports: [
    UnitTableComponent,
    ModalComponent,
    UnitFormComponent,
    ConfirmComponent,
  ],
  templateUrl: './unit-page.component.html',
})
export class UnitPageComponent {
  isModalOpen: boolean = false;
  isConfirmOpen: boolean = false;
  model: UnitModel = unitModelDefaultValues;
  public reloadTable: number = 1;
  constructor(private unitService: UnitService) {}

  handleReloadTable = () => (this.reloadTable = this.reloadTable * -1);

  openModal = () => {
    this.isModalOpen = true;
  };

  handleClose = () => {
    this.model = { ...unitModelDefaultValues };
    this.isModalOpen = false;
  };

  handleSubmit = async (model: UnitModel) => {
    if (model.id) {
      await this.unitService.updateUnit(model);
      this.handleClose();
      this.handleReloadTable();
    } else {
      await this.unitService.addUnit(model);
      this.handleClose();
      this.handleReloadTable();
    }
  };

  handleEdit = (model: UnitModel) => {
    this.model = model;
    this.openModal();
  };

  handleDelete = (model: UnitModel) => {
    this.model = model;
    this.isConfirmOpen = true;
  };

  handleCancel = () => {
    this.isConfirmOpen = false;
    this.model = { ...unitModelDefaultValues };
  };

  handleAccept = async () => {
    if (this.model.id) {
      await this.unitService.deleteUnit(this.model.id);
      this.handleReloadTable();
      this.isConfirmOpen = false;
    }
  };
}
