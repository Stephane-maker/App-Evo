import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTableModule} from '@angular/material/table'
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class MatInputModules { }
