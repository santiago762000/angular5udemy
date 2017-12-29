import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule} from '@angular/material'

@NgModule({
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule],
  exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule],
  declarations: []
})
export class MaterialModule { }
