import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CellModel } from './cell-model';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
})
export class TableCellComponent implements OnChanges {
  @Input() cellModel: CellModel = {
    isHeader: false,
    dataItem: null,
  };

  @Input() path: string | undefined;

  @Input() title: string | undefined;

  cellValue = undefined;
  isHeader = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cellModel || changes.path) {
      this.refreshCellValue();
    }
    if (changes.cellModel) {
      this.refreshIsHeader();
    }
  }

  private refreshIsHeader(): void {
    if (this.cellModel && this.cellModel.isHeader) {
      this.isHeader = true;
    } else {
      this.isHeader = false;
    }
  }

  private refreshCellValue(): void {
    if (this.cellModel && this.cellModel.dataItem && this.path) {
      this.cellValue = this.cellModel.dataItem[this.path];
    } else {
      this.cellValue = undefined;
    }
  }
}
