import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import * as c3 from "c3";

function generateRow(): any {
  const _columns: any[] = [];
  _.forEach([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], idx => {
    _columns.push([`Name-${idx} Last Name-${idx}`]);

    _.forEach([18, 12, 84, 14, 11, 85], idx2 => {
      _columns[_columns.length - 1].push(((Math.random()) * (0.33)) * 1000.0).toFixed(2);
    });
  });
  return _columns;
}

@Component({
  selector: "ava-graphics",
  templateUrl: "./graphics.component.html",
  styleUrls: ["./graphics.component.css"]
})
export class GraphicsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var chart = c3.generate({
      data: {
        columns: generateRow(),
        type: "spline"
      }
    });
  }
}
