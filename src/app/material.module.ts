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
    MatChipsModule,
    MatSelectModule
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
        MatChipsModule,
        MatSelectModule
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
        MatChipsModule,
        MatSelectModule
    ]
})

export class materialModule { }