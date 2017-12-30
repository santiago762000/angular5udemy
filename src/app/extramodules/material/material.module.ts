import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule} from '@angular/material'

@NgModule({
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule],
  exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule],
  declarations: []
})
export class MaterialModule { }
