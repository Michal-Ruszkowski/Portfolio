import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PopupComponent } from './popup/popup.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './main/experience/filters/filters.component';
import { GraphComponent } from './main/experience/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PopupComponent,
    MainComponent,
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    ErrorPageComponent,
    ContactComponent,
    FooterComponent,
    FiltersComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
