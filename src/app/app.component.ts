import { Component, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ag Grid Example';
  @ViewChild('agGrid') agGrid: AgGridNg2;
  column = [
    {
      checkboxSelection: true,
      'headerName': 'Name',
      'field': 'name'
    },
    {
      'headerName': 'Mobile',
      'field': 'mobile'
    },
    {
      'headerName': 'State',
      'field': 'state'
    }
  ];

  row = [
    {
      'name': 'Rakesh',
      'mobile': 7797977979,
      'state': 'Telangana'
    },
    {
      'name': 'Aniket',
      'mobile': 798798979,
      'state': 'Telangana'
    },
    {
      'name': 'Raghu',
      'mobile': 7987987888,
      'state': 'Telangana'
    }
  ];

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData
    .map( node => node.name + ' ' + node.mobile + ' ' + node.state).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
