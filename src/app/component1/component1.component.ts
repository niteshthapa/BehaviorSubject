import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormControl,FormGroup, Validators } from "@angular/forms";
import { SharingData } from "../service/sharingData.service";
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  behavourSubjectForm:FormGroup;
  isFormSubmit: boolean = false;
  name:string;
  constructor(private _SharingData:SharingData,private _router:Router) { 
 
  }

  ngOnInit(): void {
    this.behavourSubjectForm = new FormGroup({
      "name": new FormControl("",Validators.required)
    })
  }
  onSubmit(): void {
    this.isFormSubmit = true;
    if (!this.behavourSubjectForm.valid) {
      console.log("error");
    }
    else {
      this._SharingData.sendMessage(this.behavourSubjectForm.value.name)
      this._router.navigate(['/component-2']);
    }
  }
  get f() { return this.behavourSubjectForm.controls; }

  

}
