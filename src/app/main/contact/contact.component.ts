import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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

    const contactElement = this.elementRef.nativeElement.querySelector('.contact__text');
    observer.observe(contactElement);
  }

  startAnimate(): void {
    gsap.timeline()
    .set('.contact__title', {
      visibility: 'visible'
    })
    .from('.contact__title', {
      duration:.3,
      y: '-=15vw',
      delay: .5,
    })
    .to('.contact', {
      duration: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.95)'
    }, '-=.8')
    .to('.contact__button', {
      duration: 0.5,
      opacity: 1,
      y: '-=20px',
      stagger: 0.3
    }, "-=2.5");
  }
}
