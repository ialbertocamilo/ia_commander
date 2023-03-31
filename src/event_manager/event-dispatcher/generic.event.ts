import { IEvent } from './event.bus';


export class GenericEvent implements IEvent{
  name: string;

  constructor() {
    this.name=GenericEvent.name
  }
  execute() {
  }

}