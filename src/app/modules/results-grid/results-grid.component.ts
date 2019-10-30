import { Component, OnInit } from '@angular/core';
import { DataService } from "../../core/services/data.service";

@Component({
  selector: 'results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.scss']
})
export class ResultsGridComponent implements OnInit {
  loading = false;
  currentDataFields = [];
  clickedRowData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loading = true;
    this.loadDataTable();
    this.dataService.currentClickedRow.subscribe(data => this.clickedRowData = data);
  }

  loadDataTable() {
      this.dataService.getData().subscribe(
        data => {
          this.currentDataFields = data.fields;
          this.handleLengthProperty();
          this.loading = false;
        },
        error => {
          console.log(error.message);
          alert('HTTP Request Error : ' + error.message);
          this.loading = false;
        });
  }

  handleClick(index){
    console.log(this.currentDataFields[index]);
    const data = this.currentDataFields[index];
    const dataArray = ['Name: '+data.name, 'Type: '+data.type, 'ActualType: '+data.actualType, 'Alias: '+data.alias, 'SqlType: '+data.sqlType];
    this.dataService.changeClickedRow(dataArray);
  }

  private handleLengthProperty(){
    for(let i=0; i<this.currentDataFields.length; i++ ){
      if(!this.currentDataFields[i].hasOwnProperty('length')){
        this.currentDataFields[i]['length'] = null;
      }
    }
  }
}
