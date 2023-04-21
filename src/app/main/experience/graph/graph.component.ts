import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ExperienceService } from '../../../experience.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
selector: 'app-graph',
templateUrl: './graph.component.html',
styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('timeAxisItem')
  timeAxisItems!: QueryList<ElementRef>;

  experiences$: Observable<any[]> = this.experienceService.getExperiences();
  experiences: any[] = [];
  isVisible = false;
  private ngUnsubscribe$ = new Subject<void>();

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences$.pipe(
    takeUntil(this.ngUnsubscribe$)
    ).subscribe(experiences => {
      this.experiences = experiences;
      if (this.isVisible) {
        this.showItem();
        setTimeout(() => {
          const elements = document.querySelectorAll('.timeAxis__item');
          elements.forEach(el => {
            el.classList.add('timeAxis__item--visible');
          });
        }, 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.showItem();
    this.isVisible = true;
  }

  showItem(): void {
    this.timeAxisItems.forEach((item) => {
      const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeAxis__item--animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.0001 }
      );
      intersectionObserver.observe(item.nativeElement);
    });
  }
}