import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

const _colors = [
  "blue",
  "azure",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
  "white",
  "gray",
  "gray-dark"
];

const _status = [
  "success",
  "warning",
  "danger",
  "info",
  "success",
  "warning",
  "danger",
  "info",
  "success",
  "warning",
  "danger",
  "info",
  "success",
  "warning",
  "danger"
];

interface ICard {
  title: string;
  color: string;
  status: string;
}

@Component({
  selector: "ava-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  public includes: ICard[] = [];

  constructor() {
    _.forEach(_colors, (color, i) => {
      this.includes.push({
        title: `This title | ${color}`,
        color: color,
        status: _status[i]
      });
    });
  }

  ngOnInit() {}
}
