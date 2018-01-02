import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule,MatExpansionModule,MatListModule,MatDialogModule,MatSelectModule,MatSidenavModule,MatMenuModule,MatStepperModule} from '@angular/material'

@NgModule({
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule,MatExpansionModule,MatListModule,MatDialogModule,MatSelectModule,MatSidenavModule,MatMenuModule,MatStepperModule],
  exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule, MatTooltipModule,MatExpansionModule,MatListModule,MatDialogModule,MatSelectModule,MatSidenavModule,MatMenuModule,MatStepperModule],
  declarations: []
})
export class MaterialModule { }
