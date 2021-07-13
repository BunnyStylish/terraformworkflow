import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-codepannel',
  templateUrl: './codepannel.component.html',
  styleUrls: ['./codepannel.component.css']
})
export class CodepannelComponent implements OnInit {


  name:string;

  constructor() {
  this.name="Terraform script here"
   }

  ngOnInit() {
   
  }

}
