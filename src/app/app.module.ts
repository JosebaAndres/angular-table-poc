import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableColumnDirective } from './table-column/table-column.directive';
import { PagerComponent } from './pager/pager.component';
import { PaginatedTableComponent } from './paginated-table/paginated-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableColumnDirective,
    TableCellComponent,
    PagerComponent,
    PaginatedTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
