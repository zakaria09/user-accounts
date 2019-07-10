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
    MatTableModule,
    MatProgressSpinnerModule,
    MatChipsModule
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
        MatTableModule,
        MatProgressSpinnerModule,
        MatChipsModule
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
        MatTableModule,
        MatProgressSpinnerModule,
        MatChipsModule
    ]
})

export class materialModule { }