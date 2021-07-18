import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';

const routes: Routes = [
  { path: 'component-1', component: Component1Component },
  { path: 'component-2', component: Component2Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
