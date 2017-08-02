import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: 'app/toolbar/toolbar.component.html',
    styleUrls: ['app/toolbar/toolbar.css']
})

export class ToolbarComponent {

    @Output() toggleClicked = new EventEmitter();

    ToggleDrawer() {
        this.toggleClicked.emit();
    }
}
