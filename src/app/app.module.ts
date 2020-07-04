import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeSectionComponent } from "./home-section/home-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
