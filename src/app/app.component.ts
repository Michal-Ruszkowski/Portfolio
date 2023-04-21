import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showPopup = false;
  title = 'my_website_v3';
  welcomeFlag = sessionStorage.getItem('isWelcomeDisplayed');
  canShowWelcomeComponent = !this.welcomeFlag;

  constructor() {
    window.history.pushState({showPopup: false}, '');
  }

  ngOnInit() {
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.showPopup) {
        this.showPopup = true;
      }
      window.history.pushState({showPopup: false}, '');
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent) {
    window.history.replaceState({showPopup: this.showPopup}, '');
  }

  onWelcomeCompleted() {
    this.canShowWelcomeComponent = false;
  }

  @HostListener('window:mouseout', ['$event'])
  onMouseout(event: MouseEvent) {
    if (!sessionStorage.getItem('popup_displayed') && (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))) {
      this.showPopup = true;
      sessionStorage.setItem('popup_displayed', 'true')
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const translateX = (event.clientX - centerX) / 5; 
    const translateY = (event.clientY - centerY) / 5;
    const bg = this.bgElementRef.nativeElement as HTMLElement;
    if (bg instanceof HTMLElement) {
      bg.style.transform = `translate(${-translateX}px, ${-translateY}px)`;
    }
  }

  @ViewChild('bg', { static: true }) bgElementRef!: ElementRef;

}