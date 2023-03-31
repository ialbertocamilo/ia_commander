import { Logger } from '@nestjs/common';
import {EventEmitter} from "events"
export class EventHandler {
  eventName:string

  logger:Logger
  private eventEmitter:EventEmitter

  constructor() {
    this.eventEmitter=new EventEmitter()
  }
  emit(eventName:string, action: ()=>any  ):void{
    this.logger.log(`Emitting event : ${this.eventName} `)
    this.eventEmitter.on(this.eventName,action())
  }
}