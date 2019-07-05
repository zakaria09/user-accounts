import { NgModule } from '@angular/core';

import { 
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule
 } from '@angular/material';

@NgModule({
    imports: [
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule
    ],
    exports: [
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule
    ]
})

export class materialModule { }