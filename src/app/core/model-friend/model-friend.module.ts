import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export class ModelFriendModule {
  constructor(
    public _id: number,
    public name: string,
    public last_name : string
  ){}
}
