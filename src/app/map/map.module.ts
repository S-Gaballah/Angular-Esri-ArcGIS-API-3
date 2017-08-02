import { NgModule } from '@angular/core';

import { MapService } from './map.service';
import { MapComponent } from './map.component';



@NgModule({
    imports: [],
    declarations: [MapComponent],
    providers: [MapService],
    exports: [MapComponent]
})

export class MapModule {

}
