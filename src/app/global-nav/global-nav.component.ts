import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalNav } from '../Models/GlobalNav.model';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.css']
})
export class GlobalNavComponent {
  @Input() globalNav: GlobalNav;
  @Output() selectedNav = new EventEmitter();
  




  navSelect(clickedNav){
    console.log(this);
    
    console.log(clickedNav);
    this.selectedNav.emit(clickedNav);
  }
}
