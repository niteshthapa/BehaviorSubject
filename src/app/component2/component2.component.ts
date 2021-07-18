import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { SharingData } from "../service/sharingData.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit{
  name:string;
  constructor(private _SharingData:SharingData) { 
  }

  ngOnInit(): void {
    this._SharingData.name.subscribe(res => {  
      this.name = res;  
    }) 
  }

}
