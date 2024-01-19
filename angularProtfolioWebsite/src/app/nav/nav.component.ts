import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isCollapsed = true;

  navbarfixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY > 0){
      this.navbarfixed = true;
    } else{
      this.navbarfixed=false;
    }
  }

}
