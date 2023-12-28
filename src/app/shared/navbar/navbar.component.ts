import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @Output() newItemEvent = new EventEmitter<boolean>();
  isCollapsed = true;

 onClickMenu(){


 this.isCollapsed = !this.isCollapsed;
  this.newItemEvent.emit(this.isCollapsed);
}
}
