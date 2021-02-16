import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableColumnDirective } from '../table-column/table-column.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: Array<any> | undefined;

  @ContentChildren(TableColumnDirective)
  columns: QueryList<TableColumnDirective> | undefined;

  constructor() {}
}
