import { ExperienceType } from "./experience-type";

export interface IExperience {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    type: ExperienceType;
}
