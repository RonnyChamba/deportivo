import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = true;
  model: any[] = [];
  constructor() { }

  ngOnInit() {

    this.model = [
      {
        label: 'Football',
        icon: "../../../assets/iconsDeportes/footbal.png",
       
      },
      {
        label: 'Balls',
        icon: "../../../assets/iconsDeportes/balls_1.png",
       
      },
      {
        label: 'Baseball',
        icon: "../../../assets/iconsDeportes/baseball.png",
       
      },
      {
        label: 'Basketball',
        icon: "../../../assets/iconsDeportes/basketball.png",
       
      },
      {
        label: 'Bowling',
        icon: "../../../assets/iconsDeportes/bowling.png",
       
      },
      {
        label: 'Soccer',
        icon: "../../../assets/iconsDeportes/soccer_.png",
       
      },
      
    ]

  }


  onClickMenu(value:boolean){  
    this.isCollapsed = value;
  }
}

