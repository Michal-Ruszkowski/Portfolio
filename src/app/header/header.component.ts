import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.timeline()
      .from('.nav', {
        delay: 0.2,
        duration: 0.5,
        x: "-=100vw",
      })
      .from('.header__content', {
        duration: 0.3,
        y: "-=100vh",
      })
      .from('.nav__link', {
        duration: 0.3,
        y: "+=100",
        stagger: .2
      }, '-=0.3')
      .from('.header__title', {
        duration: 0.6,
        x: "-=80vw",
      }, '-=0.3')
      .from('.header__subtitle', {
        duration: 0.5,
        y: "+=50vh",
      }, '-=0.2')
      
      ;
      
  }
}