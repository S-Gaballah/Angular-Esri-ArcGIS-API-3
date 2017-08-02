import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: 'app/sidenav/sidenav.component.html',
  styleUrls: ['app/sidenav/sidenav.css']
})
export class SidenavComponent {

  @Input() isOpened: boolean;
  @Input() mode: string;
}
