import { Component, OnInit } from "@angular/core";

// declare var Rellax: any;

@Component({
  selector: "app-projects-section",
  templateUrl: "./projects-section.component.html",
  styleUrls: ["./projects-section.component.css"],
})
export class ProjectsSectionComponent implements OnInit {
  constructor() {}

  seeContent: boolean = true;
  seeJavaContent: boolean = true;

  public ffUrl: string = 'https://www.gofullframe.com';

  public catUrl: string = 'https://www.youtube.com/watch?v=V7eP7YQRTRU';

  public carsUrl: string = 'https://carsvolunteerapp.com';

  public evaultUrl: string = 'https://evaultinventory.com';

  ngOnInit() {
    // var rellax = new Rellax(".rellax");
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public turn() {
    if (this.seeContent == false) {
      this.seeContent = true;
    } else {
      this.seeContent = false;
    }
  }

  public turnjava() {
    if (this.seeJavaContent == false) {
      this.seeJavaContent = true;
    } else {
      this.seeJavaContent = false;
    }
  }

  public openFF() {
    window.open(this.ffUrl, '_blank');
  }

  public openCAT() {
    window.open(this.catUrl, '_blank');
  }

  public openCARS() {
    window.open(this.carsUrl, '_blank');
  }

  public openEVAULT() {
    window.open(this.evaultUrl, '_black');
  }
}