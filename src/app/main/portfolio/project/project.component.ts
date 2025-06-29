import { Component, Input, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  @Input() project: any;
  @Input() index: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAnimate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    const portfolioElement = this.elementRef.nativeElement.querySelector('.project');
    observer.observe(portfolioElement);
  }

  startAnimate(element: Element) {
    const leftSide = element.querySelector('.project__left')
    const rightSide = element.querySelector('.project__right')

    gsap.timeline()
      .set(element, {
        visibility: 'visible'
      })
      .from(leftSide, {
        duration: .5,
        x: '-=40vw',
      })
      .from(rightSide, {
        duration: .3,
        y: '+=50vw'
      })
  }
}
