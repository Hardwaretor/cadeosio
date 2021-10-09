import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-bp.json',
  templateUrl: './bp.json.component.html',
  styleUrls: ['./bp.json.component.css']

})
export class BpJsonComponent implements OnInit {

  page = {

    title: 'bp.json',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    
  };


  constructor() { }

  ngOnInit(): void {
  }

}
