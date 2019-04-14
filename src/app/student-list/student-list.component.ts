import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  x = [
    {
      name: 'შალვა',
      surname: 'ზაქაიძე',
      personalNumber: '12345678910'
    },
    {
      name: 'შალვა2',
      surname: 'ზაქაიძე2',
      personalNumber: '12345678911'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
