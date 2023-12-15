import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  mostraLabel: boolean = true;
  contentMargin = 215;
  condLoading: boolean = false;
  // srcLogo = environment.logo;
  // srcLogoReduzido = environment.logoReduzido;

  ngOnInit() {
    // let el: any = document.querySelector(".sidenav-superior")
    // const observer = new IntersectionObserver(
    //   ([e]) => e.target.classList.toggle("sticky-menu", e.intersectionRatio < 1),
    //   { threshold: [1] }
    // );

    // observer.observe(el);
  }

  isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth<700);
  }

}
