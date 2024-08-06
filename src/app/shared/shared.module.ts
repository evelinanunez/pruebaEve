import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { MatTableModule } from '@angular/material/table';
import { Letra20Directive } from './directives/letra20.directive';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    NombreCompletoPipe,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatSelectModule
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    NombreCompletoPipe,
    MatTableModule,
    RouterModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class SharedModule { }
