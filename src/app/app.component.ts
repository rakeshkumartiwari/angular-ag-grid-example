import { Component, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ag Grid Example';
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;


  @ViewChild('agGrid') agGrid: AgGridNg2;

  constructor(private http: HttpClient) {

    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        width: 150
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 100
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 100
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 100
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 100
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 150
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100
      }
    ];
  }
 
  // getSelectedRows() {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   const selectedDataStringPresentation = selectedData
  //     .map(node => node.name + ' ' + node.mobile + ' ' + node.state).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }

  onGridReddy(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
      .subscribe(data => {
        params.api.setRowData(data);
      });

  }

}
