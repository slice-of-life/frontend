import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() fill : boolean = false;
  @Input() color : string = 'black';
  @Input() size : number = 24;
  constructor() { }

  ngOnInit(): void {
  }

}
