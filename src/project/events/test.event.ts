import { IEvent } from '../../event_manager/event-dispatcher/event.bus';
import { GenericEvent } from '../../event_manager/event-dispatcher/generic.event';


export class TestEvent extends GenericEvent implements IEvent{

  execute() {
    // super.execute();
    // Logica del evento
    console.log("Executing TestEvent");
  }

}