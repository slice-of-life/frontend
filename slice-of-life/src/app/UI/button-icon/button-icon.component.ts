import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {
  @Input() iconName : string;
  @Input() buttonLabel : string;
  @Input() fontSize : number;
  @Input() iconFill : boolean;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    console.log('something')
  }

}
