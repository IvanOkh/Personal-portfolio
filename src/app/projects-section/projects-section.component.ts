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
}
