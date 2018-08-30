import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ag Grid Example';

  column = [
    {
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


}
