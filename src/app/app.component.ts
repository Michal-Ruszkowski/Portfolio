import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  showPopup = false;
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
}
