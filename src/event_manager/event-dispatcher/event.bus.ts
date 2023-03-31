import { Inject, Injectable } from '@nestjs/common';
import { EventStore } from './event-store';
import "reflect-metadata"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEvent {
  name: string,

  execute()
}

interface IEventBus {

  emit(event: IEvent): void;
  remove(eventName: string)
}

@Injectable()
export class EventBus implements IEventBus {
  private eventStore:EventStore
  constructor() {
    this.eventStore= new EventStore()
    console.log("Executing all in EventBus");
  }
  emit(event: IEvent) {
    if (!this.eventStore.get(event.name))
      this.eventStore.set(event.name, event);

    event.execute();
    console.log("Event Store all: ",this.eventStore.all());
  }

  remove(eventName:string){
    this.eventStore.remove(eventName)
  }

}