import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../../../components/select/select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-page',
  standalone: true,
  imports: [SelectComponent, CommonModule],
  templateUrl: './stock-page.component.html',
  styleUrl: './stock-page.component.css',
})
export class StockPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
