import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export class ModelConversationModule {
  constructor(
    public membre_1: number,
    public membre_2: number,
    public id_user_poster_message : number,
    public uuid: string,
    public name_membre_1: string,
    public name_membre_2: string,
    public sender: boolean
  ){}
}
