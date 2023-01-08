import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  
  @Input() title : String;
  @Input() taskList;
  displayedColumns = ['Task ID', 'Title', 'Description']
  constructor() {}

  ngOnInit(): void {}
}
