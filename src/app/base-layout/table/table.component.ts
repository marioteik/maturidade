import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { DomSanitizer } from "../../../../node_modules/@angular/platform-browser";

interface IUser {
  name: string;
  lastName: string;
  email: string;
  budget: string;
  image: any;
}

const _photos = [
  "https://www.svgrepo.com/show/165192/avatar.svg",
  "https://www.svgrepo.com/show/167780/avatar.svg",
  "https://www.svgrepo.com/show/168246/avatar.svg",
  "https://www.svgrepo.com/show/169762/avatar.svg",
];

@Component({
  selector: "ava-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  public includes: IUser[] = [];

  constructor(private sanitizer: DomSanitizer) {
    let j = 0;
    _.forEach(_photos, () => {
      _.forEach(_photos, (photo, i) => {
        this.includes.push({
          name: `Name-${i}`,
          lastName: `Last Name-${i}`,
          email: `email${i}@avanade.com`,
          budget: (((Math.random() * i) * (0.33)) * 1000.0).toFixed(2).concat(`K`),
          image: sanitizer.bypassSecurityTrustStyle(`url(${photo})`)
        });
      });
    });
  }

  ngOnInit() {}
}
