import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlType } from './../control-type/controlType';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit {
Servicetoggle_menu:boolean = true;
Formstoggle_menu:boolean = true;


  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  CIRCLE = ControlType.CIRCLE;
  ACTIVITY = ControlType.ACTIVITY;
  CONDITION = ControlType.CONDITION;
  AZURE1 = ControlType.AZURE1;
  AZURE2 = ControlType.AZURE2;
  AZURE3 = ControlType.AZURE3;
  GCP1 = ControlType.GCP1;
  GCP2 = ControlType.GCP2;
  GCP3 = ControlType.GCP3;
  ARROW = ControlType.ARROW;
 
  drag_image: HTMLImageElement;

  constructor() { }

  ngOnInit() {
    this.drag_image = document.createElement('img');
  }

  onClick(control: string) {
    this.select.emit(control);
    this.setDragImage(control);
  }

  drag(event: any, type: string) {
    event.dataTransfer.setDragImage(this.drag_image, 0, 0);
    event.dataTransfer.setData('type', type);
  }

  setDragImage(type: string) {
    switch (type) {
      case this.CIRCLE:
      this.drag_image.src = './../../assets/start.svg';
        break;
      case this.ACTIVITY:
      this.drag_image.src = './../../assets/activity.svg';
        break;
      case this.CONDITION:
      this.drag_image.src = './../../assets/condition.svg';
        break;
        case this.AZURE1:
      this.drag_image.src = './../../assets/azure/00524-icon-service-AVS.svg';
        break;
      case this.AZURE2:
      this.drag_image.src = './../../assets/azure/10114-icon-service-Azure-Stack.svg';
        break;
      case this.AZURE3:
      this.drag_image.src = './../../assets/azure/10109-icon-service-Capacity.svg';
        break;
        case this.GCP1:
      this.drag_image.src = './../../assets/gcp/AIPlatform-512-color.svg';
        break;
      case this.GCP2:
      this.drag_image.src = './../../assets/gcp/compute-engine-512-color.svg';
        break;
      case this.GCP3:
      this.drag_image.src = './../../assets/gcp/bigquery-512-color.svg';
        break;
    }
  }

Servicetogg() {
      return this.Servicetoggle_menu = !this.Servicetoggle_menu;
  }
  Formstogg() {
      return this.Formstoggle_menu = !this.Formstoggle_menu;
  }

}
