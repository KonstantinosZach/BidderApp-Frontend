import {Component, OnInit} from "@angular/core";
import {adminService} from "../admin.service";
import * as JsonToXML from "js2xmlparser";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component( {
  selector: `admin-page`,
  templateUrl: `./admin.page.html`,
  styleUrls: [`./admin.page.css`]
})

export class adminPage implements  OnInit {
  downloadJsonHref: SafeUrl | undefined;
  downloadXMLHref: SafeUrl | undefined;

  constructor(private adminService: adminService, private sanitizer: DomSanitizer) {}

  ngOnInit():void {
    this.downloadJsonHref = undefined;
    this.downloadXMLHref = undefined;
  }

  getAllItemsJSON(){
    this.adminService.getItems().subscribe(data =>{
      let theJSON = JSON.stringify(data);
      console.log(theJSON);
      this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));

    })
  }

  getAllItemsXML(){
    this.adminService.getItems().subscribe(data =>{
      this.downloadXMLHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + JsonToXML.parse("item", data));
      console.log(JsonToXML.parse("item", data));
    })
  }

}
