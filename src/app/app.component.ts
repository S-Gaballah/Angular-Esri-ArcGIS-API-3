import { Component } from '@angular/core';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
    selector: 'app',
    template: `
        <sidenav [isOpened]="sidenavOpened" [mode]="sidenavMode" >
            <div class="my-content">
                <toolbar (toggleClicked)="this.sidenavOpened = !this.sidenavOpened"></toolbar>
                <map>

                </map>
            </div>
        </sidenav>
    `
})
export class AppComponent {
    sidenavOpened: boolean = false;
    sidenavMode: string = 'side';
}
