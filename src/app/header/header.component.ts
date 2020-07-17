import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
// declare var Rellax: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  act1: string = "";
  act2: string = "";
  act3: string = "";
  constructor(private vps: ViewportScroller) {}

  ngOnInit() {
    // var rellax = new Rellax(".rellax");
  }

  scroll(el) {
    this.vps.scrollToAnchor(el);
  }
}
