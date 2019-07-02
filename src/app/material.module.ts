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
    MatSidenavModule
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
        MatSidenavModule
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
        MatSidenavModule
    ]
})

export class materialModule { }