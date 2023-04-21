import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  texts: string[] = ['Michał Ruszkowski', 'FRONT-END DEVELOPER'];
  p = '';

  constructor() { }

  ngOnInit(): void {
    const isDisplayed = sessionStorage.getItem('isContactDisplayed');
    if (!isDisplayed) {
      let i = 0;
      let j = 0;
      const intervalId = setInterval(() => {
        if (i < this.texts.length) {
          if (j < this.texts[i].length) {
            this.p += this.texts[i][j];
            j++;
          } else {
            i++;
            j = 0;
            this.p += '<br>';
          }
        } else {
          clearInterval(intervalId);
          sessionStorage.setItem('isContactDisplayed', 'true');
        }
      }, 60);
    } else {
      this.p = this.texts.join('<br>');
      const contactEl = document.querySelector('.contact');
      contactEl?.classList.remove('contact--animated')
    }
  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent implements OnInit {
//   texts: string[] = ['Michał Ruszkowski', 'FRONT-END DEVELOPER'];
//   p = '';

//   constructor() { }

//   ngOnInit(): void {
//     const isDisplayed = sessionStorage.getItem('isContactDisplayed');
//     if (!isDisplayed) {
//       let i = 0;
//       let j = 0;
//       const intervalId = setInterval(() => {
//         if (i < this.texts.length) {
//           if (j < this.texts[i].length) {
//             this.p += this.texts[i][j];
//             j++;
//           } else {
//             i++;
//             j = 0;
//             this.p += '<br>';
//           }
//         } else {
//           clearInterval(intervalId);
//           sessionStorage.setItem('isContactDisplayed', 'true');
//         }
//       }, 60);
//     } else {
//       this.p = this.texts.join('<br>');
//       const contactEl = document.querySelector('.contact');
//       contactEl?.classList.remove('contact--animated')
//     }
//   }
// }