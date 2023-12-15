import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  navLinks = [
    {path: "/home", icon:'home'},
    {path: "/ordens", icon:'list'},
    {path: "/usuarios", icon:'person'},
  ]

  ngOnInit() {
  }

  menuSel(rota : any){
    this.router.navigate([rota]);
  }
}
