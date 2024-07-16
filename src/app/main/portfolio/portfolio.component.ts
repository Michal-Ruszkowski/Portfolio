import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      name: 'List',
      imgSrc: '../../../assets/list.png',
      urlToGooglePlay: 'https://play.google.com/store/apps/details?id=com.michrusz.list',
      technologies: ['React Native']
    },
    {
      name: 'Email HTML',
      imgSrc: '../../../assets/email_html.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Email_HTML/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Email_HTML',
      technologies: ['HTML', 'CSS']
    },
    {
      name: 'Advertising banner',
      imgSrc: '../../../assets/banner.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Advertising-banner/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Advertising-banner',
      technologies: ['JavaScript', 'HTML', 'CSS', 'BEM', 'GSAP']
    },
    {
      name: 'Landing page',
      imgSrc: '../../../assets/lp.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Landing_page/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Landing_page',
      technologies: ['JavaScript', 'HTML', 'SCSS', 'BEM']
    },
    {
      name: 'Recommendation frame',
      imgSrc: '../../../assets/frame.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Recommendation_frame/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Recommendation_frame',
      technologies: ['JavaScript', 'HTML', 'SCSS', 'BEM']
    },
    {
      name: 'Validation of the form',
      imgSrc: '../../../assets/form.png',
      urlToLive: 'https://michal-ruszkowski.github.io/validation_of_the_form/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/validation_of_the_form',
      technologies: ['JavaScript', 'HTML', 'SCSS', 'BEM']
    },
    {
      name: 'Game - catch the mosquitoes',
      imgSrc: '../../../assets/mosquitoes.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Catch_the_mosquitoes_GAME/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Catch_the_mosquitoes_GAME',
      technologies: ['JavaScript', 'HTML', 'SCSS']
    },
  ]

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAnimate();
          observer.unobserve(entry.target);
        }
      });
    });

    const portfolioElement = this.elementRef.nativeElement.querySelector('.portfolio__projects');
    observer.observe(portfolioElement);
  }

  startAnimate(): void {
    gsap.timeline()
    .set('.portfolio__title', {
      visibility: 'visible'
    })
    .from('.portfolio__title', {
      duration:.3,
      y: '-=15vw',
      delay: .5,
    })
    .to('.portfolio', {
      duration: 2,
      backgroundColor: 'rgba(255, 225, 0, 0.95)'
    }, '-=.8')
    
  }
}
