import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { ContactComponent } from './main/contact/contact.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { SkillsComponent } from './main/skills/skills.component';

const routes: Routes = [
  {path:'',  pathMatch:"full", component:ContactComponent},
  {path:"contact", component:ContactComponent},
  {path:"skills", component:SkillsComponent},
  {path:"experience", component:ExperienceComponent},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
