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
      name: 'Beer App',
      imgSrc: '../../../assets/beer.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Beers-Angular',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Beers-Angular',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML']
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
      name: 'mk-szkolenia',
      imgSrc: '../../../assets/mk.png',
      urlToLive: 'https://mk-szkolenia.pl',
      urlToCode: '',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'BEM']
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
    {
      name: 'Animated balls on scroll',
      imgSrc: '../../../assets/balls.png',
      urlToLive: 'https://michal-ruszkowski.github.io/Animated-balls-on-scroll/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/Animated-balls-on-scroll',
      technologies: ['JavaScript', 'HTML', 'SCSS']
    },
    {
      name: 'Game - custom chess',
      imgSrc: '../../../assets/chess.png',
      urlToLive: 'https://michal-ruszkowski.github.io/custom_chess_game/',
      urlToCode: 'https://github.com/Michal-Ruszkowski/custom_chess_game',
      technologies: ['JavaScript', 'HTML', 'CSS']
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
