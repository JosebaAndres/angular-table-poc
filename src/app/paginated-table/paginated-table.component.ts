import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableColumnDirective } from '../table-column/table-column.directive';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss'],
})
export class PaginatedTableComponent {
  @Input() data: Array<any> | undefined;

  @ContentChildren(TableColumnDirective)
  columns: QueryList<TableColumnDirective> | undefined;

  constructor() {}
}
