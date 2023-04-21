import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  list = [
    {name: 'Angular', img: '../../assets/angular.png'},
    {name: 'TypeScript', img: '../../assets/ts.png'},
    {name: 'JavaScript', img: '../../assets/js.png'},
    {name: 'HTML5', img: '../../assets/html.png'},
    {name: 'CSS3', img: '../../assets/css.png'},
    {name: 'SCSS', img: '../../assets/scss.png'},
    {name: 'Email HTML', img: '../../assets/email.png'},
    {name: 'Manual testing', img: '../../assets/qa.png'},
    {name: 'GIT', img: '../../assets/git.png'},
    {name: 'English', img: '../../assets/english.png'},
  ];
}