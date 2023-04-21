import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { IExperience } from './iexperience';
import { IFilters } from './ifilters';
import { ExperienceType } from './experience-type';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  list:IExperience[] = [
    {
      title: 'Master of Management',
      subtitle: 'beginning of studies',
      date: '10.2009',
      description: 'Krakow Academy Andrzej Frycz-Modrzewski',
      type: ExperienceType.Education,
    },
    {
      title: 'Master of Management',
      subtitle: 'completion of studies',
      date: '05.2014',
      description: 'Krakow Academy Andrzej Frycz-Modrzewski',
      type: ExperienceType.Education,
    },
    {
      title: 'Self-employment',
      subtitle: 'starting a new position',
      date: '04.2016',
      description: 'own business',
      type: ExperienceType.Experience,
    },
    {
      title: 'React from scratch',
      subtitle: 'completion of a course',
      date: '08.2021',
      description: 'udemy',
      type: ExperienceType.Course,
    },
    {
      title: 'Self-employment',
      subtitle: 'end of self-employment',
      date: '11.2021',
      description: 'own business',
      type: ExperienceType.Experience,
    },
    {
      title: 'Junior QA',
      subtitle: 'starting a new position',
      date: '11.2021',
      description: 'SALESmanago',
      type: ExperienceType.Experience,
    },
    {
      title: 'Angular - a complete course from scratch - edition for 2021',
      subtitle: 'completion of a course',
      date: '02.2022',
      description: 'udemy',
      type: ExperienceType.Course,
    },
    {
      title: 'Junior QA',
      subtitle: 'end of employment as a Junior QA',
      date: '02.2022',
      description: 'SALESmanago',
      type: ExperienceType.Experience,
    },
    {
      title: 'Junior Front-end Developer',
      subtitle: 'starting a new position',
      date: '03.2022',
      description: 'SALESmanago',
      type: ExperienceType.Experience,
    },
    {
      title: 'Advanced projects in CSS and JavaScript',
      subtitle: 'completion of a course',
      date: '03.2023',
      description: 'udemy',
      type: ExperienceType.Course,
    },
    {
      title: 'Junior Front-end Developer',
      subtitle: 'end of employment',
      date: '04.2023',
      description: 'SALESmanago',
      type: ExperienceType.Experience,
    },
  ]
  private filters: IFilters = {
    types: [],
    descending: true
  };
  private filteredList: BehaviorSubject<IExperience[]> = new BehaviorSubject<IExperience[]>(this.list);

  constructor() { }

  getExperiences(): Observable<IExperience[]> {
    return this.filteredList.asObservable();
  }

  updateFilters(filters: any) {
    this.filters = filters;
    let newList = this.list.filter((el) => this.filters.types.includes(el.type));
    if (!this.filters.descending) {
      newList = newList.reverse();
    }
    this.filteredList.next(newList)  }
}
