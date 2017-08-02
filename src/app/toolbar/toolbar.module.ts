import { NgModule } from '@angular/core';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
    imports: [MdToolbarModule, MdButtonModule],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent]
})

export class ToolbarModule {

}
