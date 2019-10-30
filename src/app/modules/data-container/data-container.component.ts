import { Component, OnInit } from '@angular/core';
import { DataService} from "../../core/services/data.service";

@Component({
  selector: 'data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.scss']
})

export class DataContainerComponent implements OnInit {

  clickedRowData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentClickedRow.subscribe(data => this.clickedRowData = data);
    console.log(this.clickedRowData);
  }
}
