import {NgModule} from "@angular/core";
import{CommonModule} from '@angular/common';

import{
    MatButtonModule ,MatCardModule ,MatDailogModule,MatInputModule,MatTableModule,
    MatToolbarModule,MatMenuModule,MatIconModule,MatProgressSpinnerModule
} from '@angular/material'

@NgModule({
    imports :[
     CommonModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatInputModule,
     MatDailogModule,
     MatTableModule,
     MatIconModule,
     MatProgressSpinnerModule   
    ],
    exports :[
        CommonModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatInputModule,
     MatDailogModule,
     MatTableModule,
     MatIconModule,
     MatProgressSpinnerModule 
    ],
})
export class CustomMaterialModule{}