import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule, MatExpansionModule, MatListModule, MatDialogModule, MatSelectModule, MatMenuModule, MatSidenavModule} from '@angular/material'

@NgModule({
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule, MatExpansionModule, MatListModule, MatDialogModule, MatSelectModule, MatMenuModule, MatSidenavModule],
  exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule, MatExpansionModule, MatListModule, MatDialogModule, MatSelectModule, MatMenuModule, MatSidenavModule],
  declarations: []
})
export class MaterialModule { }
