import { Module } from '@nestjs/common';
import { EventDispatcherService } from './event-dispatcher/event.dispatcher.service';
import { EventBus } from './event-dispatcher/event.bus';
import { EventStore } from './event-dispatcher/event-store';

@Module({
  providers: [EventDispatcherService,EventBus],
  exports:[EventBus]
})
export class EventManagerModule {}
