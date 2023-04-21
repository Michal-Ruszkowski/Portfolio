import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const firstShadows = document.querySelectorAll('.header__shadow--first');
    const secondShadows = document.querySelectorAll('.header__shadow--second');

    function animateShadow(index: number) {
      if (index >= firstShadows.length) {
        return;
      }

      const currentShadow = firstShadows[index] as HTMLElement;
      currentShadow.style.animation = 'firstShadow .25s linear forwards';

      const nextShadow = secondShadows[index] as HTMLElement;
      nextShadow.style.animation = 'secondShadow .25s linear .25s forwards';

      setTimeout(() => {animateShadow(index + 1)}, 500);
    }

    animateShadow(0);
  }

}
