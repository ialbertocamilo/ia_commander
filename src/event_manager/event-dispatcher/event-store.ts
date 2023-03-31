import { Injectable } from '@nestjs/common';

interface IEventStore {

  get(key):any;
  set(key:string,object:any)

  all():any
  remove(key:string):void
}


export class EventStore implements IEventStore{
  private events:Record<any, object>
  public set(key:string,object:any){
    if(this.events)
    this.events[key]=object}

  public get(key:string): any {
    if (this.events && key!='')
    return this.events[key]
  }

  public all() {
    if (this.events && Object.keys(this.events).length > 0) {
      return this.events;
    }
    return {  }
  }

  remove(key:string){
    delete this.events[key]
  }
}
