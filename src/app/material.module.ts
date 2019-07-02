import { NgModule } from '@angular/core';

import { 
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule
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
        MatTabsModule
    ],
    exports: [
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule
    ]
})

export class materialModule { }