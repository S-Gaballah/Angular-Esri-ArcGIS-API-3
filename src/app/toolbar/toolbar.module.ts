import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule,MatIconModule } from '@angular/material';

import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule,MatIconModule],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent]
})

export class ToolbarModule {

}
