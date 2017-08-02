import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav.component';

import {
    MdSidenavModule, MdMenuModule, MdNativeDateModule, MdToolbarModule, MdButtonModule, MdListModule, MdListItem,
    MdCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MdSidenavModule,
        MdMenuModule,
        MdNativeDateModule,
        MdToolbarModule,
        MdButtonModule,
        MdListModule,
        MdCardModule
    ],
    declarations: [SidenavComponent],
    exports: [SidenavComponent]
})

export class SidenavModule {

}
