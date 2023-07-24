import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ContactComponent } from './main/contact/contact.component';
import { ProjectComponent } from './main/portfolio/project/project.component';
import { SkillComponent } from './main/skills/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PopupComponent,
    WelcomeComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent,
    ProjectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
