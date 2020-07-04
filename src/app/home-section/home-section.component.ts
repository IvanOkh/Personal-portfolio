import { Component, OnInit } from "@angular/core";
declare var Rellax: any;
@Component({
  selector: "app-home-section",
  templateUrl: "./home-section.component.html",
  styleUrls: ["./home-section.component.css"],
})
export class HomeSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var rellax = new Rellax(".rellax");
  }
}
