import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
declare var Rellax: any;
@Component({
  selector: "app-home-section",
  templateUrl: "./home-section.component.html",
  styleUrls: ["./home-section.component.css"],
})
export class HomeSectionComponent implements OnInit {
  constructor(private vps: ViewportScroller) {}

  ngOnInit() {
    var rellax = new Rellax(".rellax");
  }
  scroll(el) {
    this.vps.scrollToAnchor(el);
  }
}
