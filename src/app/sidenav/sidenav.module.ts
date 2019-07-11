import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav.component';

import {
    MatSidenavModule, MatMenuModule, MatNativeDateModule, MatToolbarModule, MatButtonModule, MatListModule, MatListItem,
    MatCardModule, MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatMenuModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatIconModule
    ],
    declarations: [SidenavComponent],
    exports: [SidenavComponent]
})

export class SidenavModule {

}
