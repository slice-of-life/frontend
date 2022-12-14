import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from './alert.enum';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  @Input() alertType : AlertType;
  @Input() alertMessage : string;
  AlertType = AlertType;
  constructor() { }

  getAlertTypeString() {
    switch(this.alertType) {
      case AlertType.Failure:
        return 'failure';
      case AlertType.Success:
        return 'success';
      case AlertType.Warning:
        return 'warning';
      default:
        return 'warning'
    }
    
  }
  getAlertIconString() {
    switch(this.alertType) {
      case AlertType.Failure:
        return 'error';
      case AlertType.Success:
        return 'success';
      case AlertType.Warning:
        return 'warning';
      default:
        return 'warning'
    }
  }

  ngOnInit(): void {
  }

}
