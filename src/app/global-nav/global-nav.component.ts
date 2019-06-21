import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalNav } from '../Models/GlobalNav.model';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.css']
})
export class GlobalNavComponent {
  @Input() globalNavs: GlobalNav;
  @Output() selectedNav = new EventEmitter();

  goTo(action){
    this.selectedNav.emit(action);
    console.log(action);
    
  }


}
