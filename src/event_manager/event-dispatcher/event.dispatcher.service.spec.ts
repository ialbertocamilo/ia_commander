import { Test, TestingModule } from '@nestjs/testing';
import { EventDispatcherService } from './event.dispatcher.service';

describe('EventDispatcherService', () => {
  let service: EventDispatcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventDispatcherService],
    }).compile();

    service = module.get<EventDispatcherService>(EventDispatcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
