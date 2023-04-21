import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../../experience.service';
import { ExperienceType } from '../../../experience-type';
import { IFilters } from '../../../ifilters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit{
  ExperienceType = ExperienceType;
  text:string = 'Show filters';
  isVisibleFilters:boolean = false;
  filters: IFilters = {
    types:[ExperienceType.Education, ExperienceType.Course, ExperienceType.Experience],
    descending: false
  }

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.updateFilters(this.filters);
  }

  toggleFilters(): void {
    this.text === 'Show filters' ? this.text = 'Hide filters' : this.text = 'Show filters';
    this.isVisibleFilters = !this.isVisibleFilters
  }

  onClickButton(event: Event): void {
    const target = event.target as HTMLElement;
    const type = target.dataset['type'] as ExperienceType;
    if (this.filters.types.includes(type)) {
      this.filters.types = this.filters.types.filter(el => el !== type);
    } else {
      this.filters.types.push(type);
    }
    target.classList.toggle('button--clicked')
    this.experienceService.updateFilters(this.filters);
  }

  changeSort(event: Event) {
    const target = event.target as HTMLSelectElement;
    target.value === 'ascending' ? this.filters.descending = true : this.filters.descending = false
    this.experienceService.updateFilters(this.filters);
  }

}
