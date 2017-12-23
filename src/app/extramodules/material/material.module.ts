import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule} from '@angular/material'

@NgModule({
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule],
  exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatTabsModule],
  declarations: []
})
export class MaterialModule { }
