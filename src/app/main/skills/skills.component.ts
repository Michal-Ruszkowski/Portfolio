import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills = [
    {
      name: 'React  Native',
      img: '../../../assets/react-native.svg'
    },
    {
      name: 'React',
      img: '../../../assets/React.png'
    },
    {
      name: 'Angular',
      img: '../../../assets/angular.png'
    },
    {
      name: 'TypeScript',
      img: '../../../assets/ts.png'
    },
    {
      name: 'JavaScript',
      img: '../../../assets/js.png'
    },
    {
      name: 'HTML',
      img: '../../../assets/html.png'
    },
    {
      name: 'CSS',
      img: '../../../assets/css.png'
    },
    {
      name: 'SCSS',
      img: '../../../assets/scss.png'
    },
    {
      name: 'Tailwind',
      img: '../../../assets/tailwind.png'
    },
    {
      name: 'Node.js',
      img: '../../../assets/node.png'
    },
    {
      name: 'express',
      img: '../../../assets/express.png'
    },
    {
      name: 'mongoDB',
      img: '../../../assets/mongo.png'
    },
    {
      name: 'Email HTML',
      img: '../../../assets/email.png'
    },
    {
      name: 'Maizzle',
      img: '../../../assets/maizzle.png'
    },
    {
      name: 'Git',
      img: '../../../assets/git.png'
    },
    {
      name: 'GSAP',
      img: '../../../assets/gsap.png'
    },
    {
      name: 'BEM',
      img: '../../../assets/bem.jpg'
    },
    {
      name: 'Manual testing',
      img: '../../../assets/qa.png'
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

    const skillsElement = this.elementRef.nativeElement.querySelector('.skills__list');
    if (skillsElement) {
      observer.observe(skillsElement);
    }
  }

  startAnimate(): void {
    gsap.timeline()
    .set('.skills__title', {
      visibility: 'visible'
    })
    .from('.skills__title', {
      duration:.3,
      y: '-=15vw',
      opacity: 1,
      delay: .5,
    })
    .to('.skills', {
      duration: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.9)'
    }, '-=.8')
    .to('.skill', {
      duration: 0.5,
      opacity: 1,
      y: '-=20px',
      stagger: 0.15 
    }, '-=1');
  }
}
