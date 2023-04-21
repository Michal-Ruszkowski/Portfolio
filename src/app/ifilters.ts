import { ExperienceType } from "./experience-type";

export interface IFilters {
    types: ExperienceType[];
    descending: boolean;
}